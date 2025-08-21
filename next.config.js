/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use standalone instead of export to avoid static generation issues
  output: 'standalone',
  images: {
    unoptimized: true
  },
  // Skip static optimization for problematic pages
  experimental: {
    missingSuspenseWithCSRBailout: false,
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  }
}

module.exports = nextConfig
