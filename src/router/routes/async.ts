import type { RouteRecordRaw } from 'vue-router'
export const asyncRoutes:RouteRecordRaw[] = [
  {
    path: '/index',
    component: () => import('@/views/layout/index.vue'),
    name: 'Dashboard',
    meta: {
      title: '控制台',
      iconPrefix: 'icon',
      icon: 'dashboard'
    },
    redirect: '/index/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          affix: true,
          cacheable: true,
          iconPrefix: 'icon',
          icon: 'menu',
          isRootPath: true
        }
      },
      {
        path: 'md',
        name: 'Md',
        component: () => import('@/views/index/md.vue'),
        meta: {
          title: 'markdown',
          affix: true,
          iconPrefix: 'icon',
          icon: 'menu',
          isRootPath: false
        }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/index/menu.vue'),
        meta: {
          title: '菜单',
          affix: false,
          iconPrefix: 'icon',
          icon: 'menu'
        }
      }
    ]
  },
  
]

export default asyncRoutes
