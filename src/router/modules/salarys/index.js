import Layout from '@/layout'

export default {
  name: 'salarys',
  path: '/salarys',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/salarys'),
    // 路由元信息
    meta: {
      title: '工资',
      icon: 'money'
    }
  }]
}
