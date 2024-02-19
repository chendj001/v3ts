import { getMd } from '@/md'

const mds = getMd()
export const constantRoutes = [
  {
    path: '/redirect',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      hidden: true,
      noShowTabbar: true
    },
    children: [
      {
        path: '/redirect/:path(.*)*',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/index.vue'),
    meta: {
      hidden: true
    }
  },
  ...mds
]
