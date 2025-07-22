/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://images-assets.nasa.gov/**')]
    }
};

export default nextConfig;
