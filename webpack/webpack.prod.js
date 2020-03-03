const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const modes = require('./utils/modes')
const baseWebpackConfig = require('./webpack.config')

module.exports = (env) => (
  merge(baseWebpackConfig, {

    target: env.server ? 'node' : 'web',

    entry: env.server
      ? { server: path.join(__dirname, 'ssr/entry-server.js') }
      : { client: path.join(__dirname, 'ssr/entry-client.js') },

    output: env.server
      ? {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'js/server.bundle.js',
        libraryTarget: 'commonjs2',
      }
      : {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'js/client.bundle.js',
      },

    externals: env.server
      ? nodeExternals({ whitelist: [/\.css$/, /\.sass$/] })
      : '',

    devtool: false,

    plugins: [
      ...(modes.isAnalyze ? [new BundleAnalyzerPlugin()] : []),
      ...(env.client && !modes.isAnalyze ? [new CleanWebpackPlugin()] : []),
    ],

  })
)
