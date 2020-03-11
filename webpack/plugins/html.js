const path = require('path')
const env = require('../utils/environments')

module.exports = {
  template: path.resolve(__dirname, '../..', 'public/index.html'),
  filename: env.prod
    ? path.resolve(__dirname, '..', 'ssr/index.html')
    : /* default */ 'index.html',
  customBody: env.prod ? '<!--vue-ssr-outlet-->' : '<div id="app"></div>',
  inject: env.dev,
}
