/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:4000/:path*', // sólo visible al servidor
      },
    ];
  },
};
