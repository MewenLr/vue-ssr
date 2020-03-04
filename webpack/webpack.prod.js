const path = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

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
        chunkFilename: 'js/[name].chunk.[hash:8].js',
        libraryTarget: 'commonjs2',
      }
      : {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'js/client.bundle.js',
        chunkFilename: 'js/[name].chunk.[hash:8].js',
      },

    externals: env.server
      ? nodeExternals({ whitelist: [/\.(sa|c)ss$/, /\.vue$/] })
      : '',

    devtool: false,

    plugins: [
      ...(env.server ? [new VueSSRServerPlugin()] : []),
      ...(env.client ? [new VueSSRClientPlugin()] : []),
      ...(modes.isAnalyze ? [new BundleAnalyzerPlugin()] : []),
      ...(env.client && !modes.isAnalyze ? [new CleanWebpackPlugin()] : []),
    ],

    optimization: {
      splitChunks: {
        ...(env.client ? { name: 'manifest', minChunks: Infinity } : {}),
      },
    },

  })
)
