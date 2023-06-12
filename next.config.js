/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === "production";

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  // eslint-disable-next-line no-undef
  enabled: process.env.ANALYZE === "true",
});

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  images: {
    domains: ["18.134.13.108"],
  },
  /**
   * Webpack
   */
  webpack: (config) => {
    if (isProduction) {
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = withBundleAnalyzer(nextConfig);
