import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/low-code',
    name: 'low-code',
    component: () => import('@/views/lowCode/index.vue')
  },
  {
    path: '/basic-page',
    name: 'basicePage',
    component: () => import('@/views/basic-page/index.vue'),
    meta: {
      menuTitle: '基础',
      isMenu: true
    }
  },
  {
    path: '/idea-page',
    name: 'idea-page',
    component: Layout,
    meta: {
      menuTitle: '成员管理'
    },
    children: [
      {
        path: 'user-list',
        name: 'userList',
        component: () => import('@/views/idea-page/index.vue'),
        meta: { v2: true, title: '成员列表' }
      }
    ]
  }
]
export default routes
