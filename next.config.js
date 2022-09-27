/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
