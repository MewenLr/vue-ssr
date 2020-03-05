const path = require('path')
const modes = require('../utils/modes')

module.exports = {
  template: path.resolve(__dirname, '../..', 'public/index.base.html'),
  filename: modes.isProd
    ? path.resolve(__dirname, '../..', 'public/index.html')
    : /* default */ 'index.html',
  customBody: modes.isProd ? '<!--vue-ssr-outlet-->' : '<div id="app"></div>',
  inject: modes.isDev,
}
