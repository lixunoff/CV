/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
      locales: ['en', 'ua'],
      defaultLocale: 'en',
    },
    experimental: {
        appDir: true,
    }
  };
  
  module.exports = nextConfig;