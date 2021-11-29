import Layout from '@/layout'

export default {
  name: 'dependents',
  path: '/dependents',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/departments'),
    // 路由元信息
    meta: {
      title: '组织架构',
      icon: 'tree'
    }
  }]
}
