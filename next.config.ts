import type { NextConfig } from "next";

const mediaHostname = process.env.NEXT_PUBLIC_MEDIA_HOSTNAME;
const mediaProtocol =
  process.env.NEXT_PUBLIC_MEDIA_PROTOCOL === "http" ? "http" : "https";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
  images: mediaHostname
    ? {
        remotePatterns: [
          {
            protocol: mediaProtocol,
            hostname: mediaHostname,
          },
        ],
      }
    : undefined,
};

export default nextConfig;
