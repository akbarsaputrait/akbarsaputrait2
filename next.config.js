const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    unoptimized: true,
    domains: ["a-us.storyblok.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a-us.storyblok.com",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
