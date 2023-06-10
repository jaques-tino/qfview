import Home from '@/pages/home/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import HomeChildren from './home'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/pages/home'
  },
  {
    name: 'Home',
    path: '/pages/home',
    redirect: '/pages/home/index',
    component: Home,
    children: HomeChildren
  }
]

export default routes