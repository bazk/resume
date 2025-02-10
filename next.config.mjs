// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: process.env.NODE_ENV === "development" ? "" : "/resume",
  basePath: process.env.NODE_ENV === "development" ? "" : "/resume",
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
