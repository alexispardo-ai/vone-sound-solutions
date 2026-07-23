/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — every route is prerendered, so we export plain HTML/CSS/JS.
  // This deploys to any static host (Cloudflare Pages) with no server or adapter.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // No server to optimise images on a static host; we use plain <img> anyway.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "three"],
  },
};

export default nextConfig;
