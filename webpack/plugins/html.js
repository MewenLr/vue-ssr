const path = require('path')
const modes = require('../utils/modes')

module.exports = {
  template: path.resolve(__dirname, '../..', 'public/index.base.html'),
  filename: path.resolve(__dirname, '../..', 'public/index.html'),
  customBody: modes.isProd ? '<!--vue-ssr-outlet-->' : '<div id="app"></div>',
  inject: modes.isDev,
}
