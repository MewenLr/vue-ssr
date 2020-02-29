const fs = require('fs')
const Vue = require('vue')
const server = require('express')()

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./index.html', 'utf-8'),
})

const context = {
  title: 'Title Hello',
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: '<div>The visited URL is: {{ url }}</div>',
  })

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080)
