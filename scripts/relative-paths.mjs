// Runs after `next build`. Rewrites root paths ("/about-us/", "/_next/...")
// in the exported site to relative paths, so out/ works when an HTML file is
// opened straight from disk (file://) as well as from a web server.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));

// The 404 page is served for any missing URL at any depth, so it keeps root paths.
const SKIP = ["404.html", `404${sep}`];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

// "/logo.jpg" -> "../logo.jpg". Page links ("/about-us/") are left alone
// unless `pages` is set, then they become "../about-us/index.html".
function toRelative(url, root, pages) {
  if (!url.startsWith("/") || url.startsWith("//")) return url;
  const [, path, rest] = url.match(/^([^?#]*)(.*)$/);
  let target = path.slice(1);
  const last = target.split("/").pop();
  if (!last.includes(".")) {
    if (!pages) return url;
    if (target && !target.endsWith("/")) target += "/";
    target += "index.html";
  }
  return root + target + rest;
}

// A variable font (Open Sans) gets one @font-face per weight, all pointing at
// the same file. Merge them into one rule with a weight range, so the file is
// embedded once instead of once per weight.
function mergeVariableFontFaces(css) {
  const groups = new Map();
  for (const face of css.match(/@font-face\{[^}]*\}/g) ?? []) {
    const weight = face.match(/font-weight:(\d+)/)?.[1];
    if (!weight) continue;
    const key = face.replace(/font-weight:\d+/, "");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ face, weight: Number(weight) });
  }
  for (const [key, faces] of groups) {
    if (faces.length < 2) continue;
    const weights = faces.map((f) => f.weight);
    const merged = key.replace("{", `{font-weight:${Math.min(...weights)} ${Math.max(...weights)};`);
    css = css.replace(faces[0].face, merged);
    for (const { face } of faces.slice(1)) css = css.replace(face, "");
  }
  return css;
}

// Page links keep their root paths in the HTML, so on a web server the URLs
// stay clean and Next's client navigation works as before. When opened from
// disk, this rewrites page links (and anything client components render later,
// like slider images) as they appear. Link clicks then load the page normally:
// on file:// the origin is "null", so Next treats every link as external.
const shim = (root) => `<script>(function(){
if(location.protocol!=="file:")return;
var R=${JSON.stringify(root)};
${toRelative.toString()}
function fix(el){["href","src"].forEach(function(a){
var v=el.getAttribute&&el.getAttribute(a);
if(v&&v[0]==="/"&&v[1]!=="/")el.setAttribute(a,toRelative(v,R,true));});}
new MutationObserver(function(ms){ms.forEach(function(m){
if(m.type==="attributes")return fix(m.target);
m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;fix(n);
n.querySelectorAll("[href],[src]").forEach(fix);});});
}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:["href","src"]});
})();</script>`;

let pages = 0;
for (const file of walk(OUT)) {
  const rel = relative(OUT, file);
  if (SKIP.some((s) => rel === s || rel.startsWith(s))) continue;

  if (file.endsWith(".html")) {
    const depth = rel.split(sep).length - 1;
    const root = depth ? "../".repeat(depth) : "./";
    let html = readFileSync(file, "utf8");
    if (html.includes('location.protocol!=="file:"')) continue;
    html = html
      // Those fonts are now inside the CSS, so their preload links would only
      // download them twice (and fail on file://).
      .replace(/<link rel="preload" href="[^"]*\.woff2?"[^>]*\/>/g, "")
      .replace(
        /(\s(?:href|src|action)=")([^"]*)"/g,
        (_, attr, url) => `${attr}${toRelative(url, root)}"`
      )
      .replace(/(\ssrcset=")([^"]*)"/g, (_, attr, set) =>
        `${attr}${set.replace(/(^|,\s*)(\/[^\s,]+)/g, (m, sepr, url) => sepr + toRelative(url, root))}"`
      )
      .replace(/url\((["']?)(\/[^"')]+)\1\)/g, (_, q, url) => `url(${q}${toRelative(url, root)}${q})`)
      .replace("<head>", `<head>${shim(root)}`);
    writeFileSync(file, html);
    pages++;
  } else if (file.endsWith(".css")) {
    // CSS sits in _next/static/chunks/, three levels below the site root.
    const css = mergeVariableFontFaces(readFileSync(file, "utf8"))
      .replace(
        /url\((["']?)(\/[^/"')][^"')]*)\1\)/g,
        (_, q, url) => `url(${q}../../..${url}${q})`
      )
      // Browsers block font files on file:// pages, so the fonts the site
      // actually uses are embedded: the latin subsets (next/font marks them
      // ".p." because it preloads them) and the slick slider icon font.
      .replace(
        /url\((\.\.\/media\/([^)]*(?:-s\.p\.[^)]*\.woff2|slick\.[^)]*\.woff)))\)/g,
        (_, url, name) => {
          const data = readFileSync(join(OUT, "_next/static/media", name)).toString("base64");
          const type = name.endsWith(".woff2") ? "font/woff2" : "font/woff";
          return `url(data:${type};base64,${data})`;
        }
      );
    writeFileSync(file, css);
  }
}

console.log(`relative-paths: rewrote ${pages} pages`);
