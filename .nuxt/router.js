import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2bacdff4 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5f3d56ce = () => interopDefault(import('../pages/nosotros.vue' /* webpackChunkName: "pages/nosotros" */))
const _4dcb6148 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _50c5ff5a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/blog",
      component: _2bacdff4,
      name: "blog"
    }, {
      path: "/nosotros",
      component: _5f3d56ce,
      name: "nosotros"
    }, {
      path: "/blog/:id",
      component: _4dcb6148,
      name: "blog-id"
    }, {
      path: "/",
      component: _50c5ff5a,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
