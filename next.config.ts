import type { NextConfig } from 'next';

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
};

module.exports = withVanillaExtract(nextConfig);
