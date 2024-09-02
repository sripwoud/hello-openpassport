import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
}

const millionConfig = {
  auto: true,
}

export default million.next(nextConfig, millionConfig)
