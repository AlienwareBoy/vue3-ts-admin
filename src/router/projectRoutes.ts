import { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'
const projectRoutes: Array<RouteRecordRaw> = [
  {
    path: '/pro-workbench',
    name: 'workbench',
    component: () => import('@/views/workbench/index.vue'),
    meta: {
      menuTitle: '工作台',
      isMenu: true
    }
  },
  {
    path: '/process-mangagement',
    name: 'process-mangagement',
    component: Layout,
    meta: {
      menuTitle: '进度管理'
    },
    children: [
      {
        path: 'work-mock',
        name: 'work-mock',
        component: () => import('@/views/pocessManagement/work-mock/index.vue'),
        meta: { v2: true, keepAlive: true, title: '施工模拟' }
      },
      {
        path: 'plan-information',
        name: 'plan-information',
        component: () => import('@/views/pocessManagement/plan-information.vue'),
        meta: { v2: true, keepAlive: true, title: '计划信息' }
      },
      {
        path: 'plan-gantt-detail',
        name: 'plan-gantt-detail',
        component: () => import('@/views/pocessManagement/plan-gantt-detail.vue'),
        meta: { isHidden: true, keepAlive: true, title: '计划信息甘特图' }
      },
      {
        path: 'quantity-information',
        name: 'quantity-information',
        component: () => import('@/views/pocessManagement/quantity-information.vue'),
        meta: { v2: true, keepAlive: true, title: '工程量信息' }
      },
      {
        path: 'log-information',
        name: 'log-information',
        component: () => import('@/views/pocessManagement/log-information.vue'),
        meta: {
          keepAlive: true,
          title: '日志信息'
        }
      }
    ]
  },
  {
    path: '/doc-management',
    name: 'docManagement',
    component: Layout,
    meta: {
      menuTitle: '文档管理'
    },
    children: [
      {
        path: 'docList',
        name: 'docList',
        component: () => import('@/views/docManagement/docList.vue'),
        meta: { v2: true, keepAlive: true, title: '文档列表' }
      },
      {
        path: 'docShare',
        name: 'docShare',
        component: () => import('@/views/docManagement/docShare.vue'),
        meta: { v2: true, keepAlive: true, title: '我的分享' }
      },
      {
        path: 'recyclingArea',
        name: 'recyclingArea',
        component: () => import('@/views/docManagement/recyclingArea.vue'),
        meta: {
          keepAlive: true,
          title: '回收站'
        }
      }
    ]
  },
  {
    path: '/bcf-mangagement',
    name: 'bcf-mangagement',
    component: () => import('@/views/bcf-management/index.vue'),
    meta: {
      menuTitle: 'BCF',
      isMenu: true
    }
  },
  // {
  //   path: '/model-mangagement',
  //   name: 'modelManagement',
  //   component: Layout,
  //   meta: {
  //     menuTitle: '模型管理'
  //   },
  //   children: [
  //     {
  //       path: 'modelList',
  //       name: 'modelList',
  //       component: () => import('@/views/modelManagement/index.vue'),
  //       meta: {
  //         v2: true,
  //         keepAlive: true,
  //         title: '模型列表'
  //       }
  //     },
  //     {
  //       path: 'modelDetail',
  //       name: 'modelDetail',
  //       component: () => import('@/views/modelManagement/modelDetail/index.vue'),
  //       meta: { isHidenRoute: true, keepAlive: true, title: '模型详情' }
  //     }
  //   ]
  // },
  {
    path: '/task-management',
    name: 'task-management',
    component: () => import('@/views/taskManagement/index.vue'),
    meta: {
      menuTitle: '任务管理',
      isMenu: true
    }
  },
  {
    path: '/user-management',
    name: 'userManagement',
    component: Layout,
    meta: {
      menuTitle: '成员管理'
    },
    children: [
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/userManagement/userList.vue'),
        meta: { v2: true, title: '成员列表' }
      },
      {
        path: 'userAuth',
        name: 'userAuth',
        component: () => import('@/views/userManagement/userAuth.vue'),
        meta: { v2: true, title: '权限组' }
      }
    ]
  },
  {
    path: '/pro-management',
    name: 'proManagement',
    component: () => import('@/views/proManagement/index.vue'),
    meta: {
      menuTitle: '项目管理',
      isMenu: true
    }
  }
]

export default projectRoutes
