/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is important for Plasmic integration
  transpilePackages: ['@plasmicapp/loader-nextjs', '@plasmicapp/host'],
}

export default nextConfig

