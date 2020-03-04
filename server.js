const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const Router = require('koa-router')
const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync('./public/index.html', 'utf-8')

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const server = new Koa()
const router = new Router()

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
})

server.use(serve(path.join(__dirname, 'dist')))

router.get('*', async (ctx) => {
  try {
    const context = { url: ctx.url }
    const html = await renderer.renderToString(context)
    return ctx.body = html
  } catch (e) {
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
