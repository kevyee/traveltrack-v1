const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        hostname: "lp-cms-production.imgix.net",
      },
      {
        hostname: "lp-cms-production.imgix.net",
      },
    ],
  },
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
