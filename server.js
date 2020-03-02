const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./public/index.html', 'utf-8'),
})
const bundle = require('./dist/js/server.bundle.js')

const context = {
  title: 'Vue Js - Server Renderer',
  meta: `
    <meta description="vuejs server side renderer">
  `,
}

const server = new Koa()
const router = new Router()

router.get('*', async (ctx) => {
  try {
    const app = await bundle.default({ url: ctx.url })
    const html = await renderer.renderToString(app, context)
    return ctx.body = html
  } catch (e) {
    console.error('here is e =>', e)
    if (e.code === 404) {
      ctx.status = 404
      return ctx.body = 'Page not found'
    }
    ctx.status = 500
    return ctx.body = 'Internal Server Error'
  }
})

server.use(router.routes()).use(router.allowedMethods())

server.listen(8080)
