import createApp from '../../src/app'

export default (context) => new Promise((res, rej) => {
  const { app, router, store } = createApp()

  router.push(context.url) // set server-side router's location

  router.onReady(() => {
    context.rendered = () => context.state = store.state
    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) return rej({ code: 404 })
    return res(app)
  }, rej)
})
