/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
