/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: { allowedOrigins: ["app.commercialgrowth.com.au", "claudemasteryprogram.vercel.app", "localhost:3000"] }
  }
};
export default nextConfig;
