import demo from '@/views/Demo.vue'
import admin from '@/views/admin.vue'
import demo02 from '@/views/demo02.vue'
import parent from '@/views/parent.vue'

/**
 * 静态路由
 */
export const constantRouterMap = [
    {
        path: '/admin',
        name: 'admin',
        component: admin,
        meta: { title: '后台' },
    },
    {
        path: '/demo',
        name: 'demo',
        component: demo,
        meta: { title: 'index' },
    },
    {
        path: '/',
        name: 'demo02',
        component: demo02,
        meta: { title: 'demo02' },
    },
    {
        path: '/parent',
        name: 'parent',
        component: parent,
        meta: { title: 'parent' },
    },
]