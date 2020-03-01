import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import About from '@/components/about.vue'

Vue.use(Router)

export default () => new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})
