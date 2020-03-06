import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'

Vue.use(Meta)
Vue.use(Router)

export default () => new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/components/pages/home.vue'),
    },
    {
      name: 'about',
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '@/components/pages/about.vue'),
    },
  ],
})
