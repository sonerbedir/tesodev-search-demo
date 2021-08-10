import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InfoList from '../views/InfoList.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/infolist/:term',
    name: 'InfoList',
    component: InfoList
  },
  // {
  //   path: '/infolist/:term',
  //   name: 'InfoList',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ )
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
