/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

const nextConfig = {
  // Configuration options
  output: 'standalone',
  experimental: {
    // Allow dynamic rendering for i18n
    ppr: false
  }
};

module.exports = withNextIntl(nextConfig);
