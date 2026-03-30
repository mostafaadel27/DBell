import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/DBell",
  assetPrefix: "/DBell/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
