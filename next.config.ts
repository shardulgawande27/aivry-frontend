import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.mscwlns.co"],
  },
};

export default nextConfig;
