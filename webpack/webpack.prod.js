const path = require('path')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const env = require('./utils/environments')
const terserOpts = require('./optimization/terser')
const chunksOpts = require('./optimization/chunks')
const baseWebpackConfig = require('./webpack.config')

module.exports = merge(baseWebpackConfig, {

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
    ...(env.client ? [
      new VueSSRClientPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.[hash:8].css',
        chunkFilename: 'css/[name].chunk.[hash:8].css',
      }),
    ] : []),
    ...(env.server ? [new VueSSRServerPlugin()] : []),
    ...(env.analyze ? [new BundleAnalyzerPlugin()] : []),
    ...(env.client && !env.analyze ? [new CleanWebpackPlugin()] : []),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(terserOpts),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      // ...chunksOpts,
      ...(env.client ? { name: 'manifest', minChunks: Infinity, ...chunksOpts } : {}),
    },
  },

})
