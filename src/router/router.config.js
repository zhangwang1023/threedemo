import demo from '@/views/Demo.vue'
import bar_line from '@/components/bar_line.vue'
import demo02 from '@/views/demo02.vue'
import parent from '@/views/parent.vue'

/**
 * 静态路由
 */
export const constantRouterMap = [
    {
        path: '/bar_line',
        name: 'bar_line',
        component: bar_line,
        meta: { title: '组件' },
    },
    {
        path: '/pie',
        name: 'pie',
        meta: { title: '组件' },
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