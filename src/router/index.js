import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home.vue'
import About from '@/components/pages/about.vue'

Vue.use(Router)

export default () => new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'about',
      path: '/about',
      component: About,
      // component: () => import(/* webpackChunkName: "about" */ '@/components/pages/about.vue'),
    },
  ],
})
