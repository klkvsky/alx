import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async headers() {
    return [
      {
        source: '/privacy.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;