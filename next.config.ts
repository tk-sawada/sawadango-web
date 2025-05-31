import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.11',
        port: '1337',
        pathname: '/uploads/**',
        search: '',
      },
    ],
  },
}

module.exports = {
  images: {
    domains: ['kind-wealth-bbafc33971.media.strapiapp.com', 'engaging-authority-49579fa29f.media.strapiapp.com'],
  },
};
