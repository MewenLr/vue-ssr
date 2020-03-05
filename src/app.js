import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './app.vue'
import createRouter from './router'
import createStore from './store'

export default () => {
  const router = createRouter()
  const store = createStore()

  sync(store, router)

  const app = new Vue({
    store,
    router,
    render: (h) => h(App),
  })

  return { app, router, store }
}
