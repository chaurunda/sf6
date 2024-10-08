/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, context) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    })
    return config
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
