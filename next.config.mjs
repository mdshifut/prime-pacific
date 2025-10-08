/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  assetPrefix: "http://www.primepacificconsultancy.com.au",
  trailingSlash: true,
};

export default nextConfig;
