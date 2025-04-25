import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://da90-2a09-bac5-39e0-137d-00-1f1-21f.ngrok-free.app/:path*',
      },
    ];
  },
};

export default nextConfig;
