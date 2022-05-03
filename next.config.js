/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    minimumCacheTTL: 60 * 60 *8,
  }
}
