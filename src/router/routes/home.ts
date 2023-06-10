import HomeIndex from '@/pages/index/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'HomeIndex',
    path: '/pages/home/index',
    component: HomeIndex,
    meta: {
      title: '主页'
    }
  },
  {
    name: 'HomeHouse',
    path: '/pages/home/house',
    component: () => import('@/pages/house/index.vue'),
    meta: {
      title: '房源'
    }
  },
  {
    name: 'HomeClient',
    path: '/pages/home/client',
    component: () => import('@/pages/client/index.vue'),
    meta: {
      title: '客源'
    }
  },
  {
    name: 'HomeMarket',
    path: '/pages/home/market',
    component: () => import('@/pages/market/index.vue'),
    meta: {
      title: '营销'
    }
  },
  {
    name: 'HomeDeal',
    path: '/pages/home/deal',
    component: () => import('@/pages/deal/index.vue'),
    meta: {
      title: '交易'
    }
  },
  {
    name: 'HomeData',
    path: '/pages/home/data',
    component: () => import('@/pages/data/index.vue'),
    meta: {
      title: '数据'
    }
  },
  {
    name: 'HomePersonnel',
    path: '/pages/home/personnel',
    component: () => import('@/pages/personnel/index.vue'),
    meta: {
      title: '人事'
    }
  },
  {
    name: 'HomeSystem',
    path: '/pages/home/system',
    component: () => import('@/pages/system/index.vue'),
    meta: {
      title: '系统'
    }
  },
]

export default routes
