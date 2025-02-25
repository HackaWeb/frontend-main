import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    crossOrigin: "anonymous",
    images: {
        remotePatterns: [
            {
                hostname: "dmtrapp.blob.core.windows.net",
            },
            {
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
};

export default nextConfig;
