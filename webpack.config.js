const webpack         = require('webpack');
const {merge}         = require('webpack-merge');
const path            = require('path');
const writeFile       = require('write-file-webpack-plugin');
const commonConfig    = require('./webpack.common.js');
const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT;

module.exports = merge(commonConfig, {
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: true,
    }),
    new writeFile(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    watchContentBase: true,
    open: false,
    port: DEV_SERVER_PORT,
  },
});
