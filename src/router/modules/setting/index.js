import Layout from '@/layout'

export default {
  name: 'setting',
  path: '/setting',
  component: Layout,
  children: [{
    // 二级路由path什么都不写表示，二级路由的默认路由
    path: '',
    component: () => import('@/views/setting'),
    // 路由元信息
    meta: {
      title: '公司设置',
      icon: 'setting'
    }
  }]
}
