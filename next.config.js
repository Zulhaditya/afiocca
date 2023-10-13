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
  }
}

module.exports = nextConfig
