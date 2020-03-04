const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const baseWebpackConfig = require('./webpack.config')

module.exports = merge(baseWebpackConfig, {

  entry: path.join(__dirname, 'ssr/entry-client.js'),

  output: {
    filename: 'js/client.bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },

  devServer: {
    hot: true,
    quiet: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true,
    },
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

})
