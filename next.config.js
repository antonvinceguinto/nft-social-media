/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
    images: {
    domains: ['randomuser.me', 'images.wsj.net', 'techcrunch.com', 'larvalabs.com'],
  },
};

module.exports = nextConfig;
