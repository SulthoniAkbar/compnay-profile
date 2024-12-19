/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "randomuser.me"], // Tambahkan hostname Contentful di sini
  },
};

module.exports = nextConfig;
