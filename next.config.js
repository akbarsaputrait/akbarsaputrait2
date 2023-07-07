const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  images: {
    domains: ["a-us.storyblok.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a-us.storyblok.com",
      },
    ],
  },
};

module.exports = nextConfig;
