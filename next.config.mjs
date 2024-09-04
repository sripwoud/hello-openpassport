import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'web-worker': false,
      }
    }

    return config
  },
}

const millionConfig = {
  auto: true,
}

export default million.next(nextConfig, millionConfig)
