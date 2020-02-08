import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Inspect from '../views/Inspect'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  base: process.env.BASE_URL,
  routes
})

export default router
