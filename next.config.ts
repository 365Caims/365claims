import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Helps avoid accidental exposure of envs
  env: {},
};

export default nextConfig;
