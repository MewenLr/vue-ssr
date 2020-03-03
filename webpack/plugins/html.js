const path = require('path')
const modes = require('../utils/modes')

module.exports = {
  template: path.resolve(__dirname, '../..', 'public/index.html'),
  filename: 'index.html',
  customBody: modes.isProd ? '<!--vue-ssr-outlet-->' : '<div id="app"></div>',
  inject: true,
  minify: { collapseWhitespace: true },
}
