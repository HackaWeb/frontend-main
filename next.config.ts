import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    crossOrigin: "anonymous",
    images: {
        remotePatterns: [
            {
                hostname: "dmtrapp.blob.core.windows.net",
            },
        ],
    },
};

export default nextConfig;
