import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import NoData from '@/views/404/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { name: '首页' }
      },
      {
        path: '/404',
        name: 'NoData',
        component: NoData,
        meta: { name: '首页' }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'Any',
        redirect: '/404'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
