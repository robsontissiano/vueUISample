import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/axios',
      name: 'axios',
      // component: Axios
      component: () => import(/* webpackChunkName: "axios" */ './views/Axios.vue')
    },
    {
      path: '/pug',
      name: 'pug',
      component: () => import(/* webpackChunkName: "pug" */ './views/Pug.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import(/* webpackChunkName: "vuex" */ './views/Vuex.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
