import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Inspect from '../views/Inspect'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/inspect/:id',
    name: 'inspect',
    component: Inspect
  },
  {
    path: '*',
    component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
