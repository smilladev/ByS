/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sgtm/:path*',
        destination: 'https://xqsgapnu.sav.stape.io/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
