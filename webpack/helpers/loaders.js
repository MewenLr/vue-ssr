const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = require('./environments')

module.exports = [

  /* vue-loader */
  {
    test: /\.vue$/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../..', 'node_modules/.cache/vue-loader'),
          cacheIdentifier: '735d2f52',
        },
      },
      {
        loader: 'vue-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../..', 'node_modules/.cache/vue-loader'),
          cacheIdentifier: '735d2f52',
        },
      },
    ],
  },

  /* pug-plain-loader */
  {
    test: /\.pug$/,
    use: [
      {
        loader: 'pug-plain-loader',
      },
    ],
  },

  /* babel-loader */
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../..', 'node_modules/.cache/babel-loader'),
          cacheIdentifier: '4d286ef4',
        },
      },
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../..', 'node_modules/.cache/babel-loader'),
          cacheIdentifier: '4d286ef4',
        },
      },
    ],
  },

  /* css-loader */
  {
    test: /\.css$/,
    use: [
      env.prod && env.client
        ? { loader: MiniCssExtractPlugin.loader }
        : { loader: 'vue-style-loader' },
      {
        loader: 'css-loader', options: { sourceMap: false },
      },
    ],
  },

  /* sass-loader */
  {
    test: /\.s(a|c)ss$/,
    use: [
      env.prod && env.client
        ? { loader: MiniCssExtractPlugin.loader }
        : { loader: 'vue-style-loader' },
      {
        loader: 'css-loader', options: { sourceMap: false },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: path.resolve(__dirname, 'postcss.config.js'),
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
          sassOptions: { indentedSyntax: true },
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          sourceMap: false,
          resources: path.resolve(__dirname, '../..', 'src/assets/styles/**/*.sass'),
        },
      },
    ],
  },

  /* assets */
  {
    test: /\.(png|jpe?g|gif|ico)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          esModule: false,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        },
      },
    ],
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          esModule: false,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]',
            },
          },
        },
      },
    ],
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]',
            },
          },
        },
      },
    ],
  },

]
