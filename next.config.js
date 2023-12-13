/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'placeimg.com',
      'smn.newfemme.co',
      'newfemme.co',
      'bitter.bragherstudio.com',
      'lh3.googleusercontent.com',
      'api.newfemme.co',
      'smn.newfemme.co',
      'upload.wikimedia.org',
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;