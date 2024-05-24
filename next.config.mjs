/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "https://ppk.pockethost.io/",
      },
      {
        hostname: "ppk.pockethost.io",
      },
    ],
  },
};

export default nextConfig;
