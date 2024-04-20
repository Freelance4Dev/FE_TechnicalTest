/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lautan-natural-krimerindo.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
