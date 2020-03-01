const fs = require('fs')
const path = require('path')
const express = require('express')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./public/index.html', 'utf-8'),
})
const bundle = require('./dist/server.bundle.js')

const server = express()

server.use('/dist', express.static(path.join(__dirname, './dist')))

server.get('*', (req, res) => {
  bundle.default({ url: req.url }).then((app) => {
    const context = {
      title: 'Vue Js - Server Renderer',
      meta: `
        <meta description="vuejs server side renderer">
      `,
    }

    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        if (err.code === 404) return res.status(404).end('Page not found')
        return res.status(500).end('Internal Server Error')
      }
      return res.end(html)
    })
  }, (err) => {
    console.log('here is err =>', err)
  })
})

server.listen(8080)
