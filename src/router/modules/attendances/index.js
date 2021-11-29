import Layout from '@/layout'

export default {
  name: 'attendances',
  path: '/attendances',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/attendances'),
    // 路由元信息
    meta: {
      title: '考勤',
      icon: 'skill'
    }
  }]
}
