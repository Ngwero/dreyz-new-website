import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  transpilePackages: ["three"],
  // Keep turbopack root inside this project (home dir has a stray lockfile)
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
