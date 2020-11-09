import echartsDemo from '@/views/echartsDemo.vue'
import threeDemo from '@/views/threeDemo.vue'
import parent from '@/views/parent.vue'

/**
 * 静态路由
 */
export const constantRouterMap = [
    {
        path: '/echartsDemo',
        name: 'echartsDemo',
        component: echartsDemo,
        meta: { title: 'echarts练习' },
    },
    {
        path: '/',
        name: 'threeDemo',
        component: threeDemo,
        meta: { title: '3D练习' },
    },
    {
        path: '/parent',
        name: 'parent',
        component: parent,
        meta: { title: '组件调用练习' },
    },
]