/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    localPatterns: [
      {
        // Allow all local images with any query strings
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig