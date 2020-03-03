const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const html = require('./plugins/html')

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
    new HtmlPlugin(html),
  ],

}
