/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/projects-detail/:projectId',
        destination: '/projects-detail',
      }
    ]
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  }
}

module.exports = nextConfig
