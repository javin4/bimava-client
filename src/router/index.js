import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/projects.vue')
  },
  {
    path: '/projectDetail',
    name: 'projectDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/projectDetail.vue')
  },
  {
    path: '/lvs',
    name: 'lvs',
    component: () => import(/* webpackChunkName: "about" */ '../views/lvs.vue')
  },
  {
    path: '/phases',
    name: 'phases',
    component: () => import(/* webpackChunkName: "about" */ '../views/phases.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
