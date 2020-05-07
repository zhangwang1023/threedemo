import demo from '@/views/Demo.vue'

/**
 * 静态路由
 */
export const constantRouterMap = [{
        path: '/',
        name: 'demo',
        component: demo,
        meta: { title: 'index' },
    },
]