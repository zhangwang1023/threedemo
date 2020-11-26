import echartsDemo from '@/views/echartsDemo.vue'
import threeDemo from '@/views/threeDemo.vue'
import parent from '@/views/parent.vue'
import tfdemo from '@/views/tensorflow/tfdemo.vue'
import test1 from '@/views/tensorflow/test1.vue'
import test2 from '@/views/tensorflow/test2.vue'

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
    {
        path: '/tfdemo',
        name: 'tfdemo',
        component: tfdemo,
        meta: { title: '张量和操作' },
    },
    {
        path: '/test1',
        name: 'test1',
        component: test1,
        meta: { title: 'bodypix' },
    },
    {
        path: '/test2',
        name: 'test2',
        component: test2,
        meta: { title: 'blazeface' },
    },
]