const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const htmlOpts = require('./plugins/html')
const copyOpts = require('./plugins/copy')
const loaders = require('./helpers/loaders')

module.exports = {

  resolve: {
    alias: { '@': path.resolve(__dirname, '..', 'src') },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },

  module: { rules: loaders },

  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin(copyOpts),
    new HtmlPlugin(htmlOpts),
    new CaseSensitivePathsPlugin(),
  ],

}
