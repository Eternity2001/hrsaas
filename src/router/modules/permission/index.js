import Layout from '@/layout'

export default {
  name: 'permission',
  path: '/permission',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/permission'),
    // 路由元信息
    meta: {
      title: '权限管理',
      icon: 'lock'
    }
  }]
}
