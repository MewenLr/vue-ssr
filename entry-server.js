import createApp from './src/app'

export default (context) => new Promise((res, rej) => {
  const { app, router } = createApp()

  router.push(context.url) // set server-side router's location

  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) return rej({ code: 404 })
    return res(app)
  }, rej)
})
