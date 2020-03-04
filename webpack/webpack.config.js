const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// const TerserPlugin = require('terser-webpack-plugin')

const htmlOpts = require('./plugins/html')
const copyOpts = require('./plugins/copy')
// const chunksOpts = require('./optimization/chunks')
// const terserOpts = require('./optimization/terser')

module.exports = {

  resolve: {
    alias: { '@': path.resolve(__dirname, '..', 'src') },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },

  module: {
    rules: [

      /* vue-loader */
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
      },

      /* babel-loader */
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'babel-loader' },
        ],
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

  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin(copyOpts),
    new HtmlPlugin(htmlOpts),
  ],

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin(terserOpts),
  //   ],
  //   splitChunks: chunksOpts,
  // },

}
