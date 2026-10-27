/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "http://www.primepacificconsultancy.com.au"
      : undefined,
  trailingSlash: true,
};

export default nextConfig;
