import Layout from '@/layout'

export default {
  name: 'Social',
  path: '/social',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/social'),
    // 路由元信息
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
