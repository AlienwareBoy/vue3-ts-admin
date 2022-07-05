import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      isHidenRoute: true,
      menuTitle: '系统后台'
    }
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../views/test1/index.vue'),
    meta: {
      isMenu: true,
      menuTitle: '一级目录'
    }
  },
  {
    path: '/test2',
    name: 'test2',
    component: Layout,
    meta: {
      menuTitle: '系统后台2'
    },
    children: [
      {
        path: 'text3',
        meta: {
          v2: true,
          keepAlive: true,
          title: '文档列表'
        },
        component: () => import('../views/test2/index.vue')
      }
    ]
  }
]

export default routes
