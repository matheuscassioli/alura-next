/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  eslint: {
    // Lint only on build
    ignoreDuringBuilds: true,
  },
};