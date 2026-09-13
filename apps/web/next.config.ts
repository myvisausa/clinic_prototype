import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["ui"],
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
