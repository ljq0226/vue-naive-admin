import Layout from '@/layout/index.vue'

export default [
  {
    name: 'POST',
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: '组件示例',
      role: ['root'],
    },
    children: [
      {
        name: 'EXAMPLE-TABLE',
        path: 'table',
        component: () => import('@/views/examples/table/index.vue'),
        redirect: '/example/table/post',
        meta: {
          title: '表格',
          role: ['root'],
        },
        children: [
          {
            name: 'POST-LIST',
            path: 'post',
            component: () => import('@/views/examples/table/post/index.vue'),
            meta: {
              title: '文章列表',
              role: ['root'],
            },
          },
          {
            name: 'POST-CREATE',
            path: 'post-create',
            component: () => import('@/views/examples/table/post/post-create.vue'),
            meta: {
              title: '创建文章',
              role: ['root'],
            },
          },
        ],
      },
    ],
  },
]
