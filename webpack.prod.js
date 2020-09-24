const webpack      = require('webpack');
const {merge}      = require('webpack-merge');
const terserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: false,
    }),
  ],
  optimization: {
    minimizer: [
      new terserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
