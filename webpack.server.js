const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { dependencies } = require('./package.json')
const baseWebpackConfig = require('./webpack.config')

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './entry-server.js',
  },
  devtool: false,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  externals: Object.keys(dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production',
    }),
  ],
})

module.exports = webpackConfig
