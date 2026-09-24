import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
