const withCSS = require('@zeit/next-css');

var config = {
  /* publicRuntimeConfig: {
    localeSubpaths: process.env.LOCALE_SUBPATHS === 'true',
  }, */
};

const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
config = withBundleAnalyzer({
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  ...config,
});

module.exports = withCSS(config);
