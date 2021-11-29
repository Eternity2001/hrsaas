import Layout from '@/layout'

export default {
  name: 'approvals',
  path: '/approvals',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/approvals'),
    // 路由元信息
    meta: {
      title: '审批',
      icon: 'tree-table'
    }
  }]
}
