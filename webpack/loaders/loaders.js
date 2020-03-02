module.exports = [

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

]
