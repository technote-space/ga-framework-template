const {merge}                     = require('webpack-merge');
const licenseCheckerWebpackPlugin = require('license-checker-webpack-plugin');

module.exports = merge(require('@technote-space/ga-framework/webpack.common'), {
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? [
      new licenseCheckerWebpackPlugin({
        outputFilename: '../ThirdPartyNotices.txt',
        allow: '(Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT OR ISC OR Zlib)',
        emitError: true,
      }),
    ] : []),
  ],
});
