/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "zeimoto.com" }],
        destination: "https://www.zeimoto.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
