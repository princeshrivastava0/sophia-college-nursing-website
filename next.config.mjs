/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/nursing",
  assetPrefix: "/nursing",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
