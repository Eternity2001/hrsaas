import Layout from '@/layout'

export default {
  name: 'employees',
  path: '/employees',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/employees'),
    // 路由元信息
    meta: {
      title: '员工管理',
      icon: 'people'
    }
  }]
}
