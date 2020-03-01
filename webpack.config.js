const path = require('path')
const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const isAnalyze = process.argv.includes('--analyse')
const isDev = process.argv.includes('--mode=development')
const isProd = process.argv.includes('--mode=production')

module.exports = {

  /**
   * Entry
  */
  entry: './entry-client.js',

  /**
   * Output
  */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
  },

  /**
   * Resolve
  */
  resolve: {
    alias: { '@': path.join(__dirname, 'src') },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },

  /**
   * DevServer
  */
  devServer: {
    hot: true,
    quiet: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true,
    },
  },

  /**
   * Modules
  */
  module: {
    rules: [

      /* vue-loader */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
        // include: [path.resolve(__dirname, '..', 'src')],
      },

      /* babel-loader */
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        // include: [path.resolve(__dirname, '..', 'src')],
      },

      /* css-loader */
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { sourceMap: false } },
        ],
      },

    ],
  },

  /**
   * Plugins
  */
  plugins: [
    new VueLoaderPlugin(),
    ...(isDev ? [
      new FriendlyErrorsWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ] : []),
    ...(isProd ? [new CleanWebpackPlugin()] : []),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],


}
