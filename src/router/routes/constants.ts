export const constantRoutes = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/index.vue'),
    meta: {
      hidden: true,
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/index.vue'),
    meta: {
      hidden: true,
    }
  }, {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/index.vue'),
    meta: {
      hidden: true,
    }
  }]