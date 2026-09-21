import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site so it can be hosted on Cloudflare Pages (output dir: out)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
