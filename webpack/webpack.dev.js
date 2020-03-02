const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('../webpack.config')

module.exports = merge(baseWebpackConfig, {
  entry: path.join(__dirname, 'ssr/entry-client.js'),
})
