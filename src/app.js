import Vue from 'vue'
import Meta from 'vue-meta'
import { sync } from 'vuex-router-sync'
import { VLazyImagePlugin } from 'v-lazy-image'

import App from './app.vue'
import createStore from './store'
import createRouter from './router'

Vue.use(Meta)
Vue.use(VLazyImagePlugin)

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
