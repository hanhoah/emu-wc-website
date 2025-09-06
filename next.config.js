/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

const nextConfig = {
  // Configuration options
};

module.exports = withNextIntl(nextConfig);
