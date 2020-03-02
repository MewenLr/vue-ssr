const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const modes = require('./webpack/utils/modes')
const loaders = require('./webpack/loaders/loaders')

module.exports = {

  resolve: {
    alias: { '@': path.join(__dirname, 'src') },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },

  devServer: {
    hot: true,
    quiet: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true,
    },
  },

  module: { rules: loaders },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: true,
      minify: { collapseWhitespace: true },
    }),
    ...(modes.isDev ? [
      new FriendlyErrorsWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ] : []),
    ...(modes.isProd ? [new CleanWebpackPlugin()] : []),
    ...(modes.isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],

}
