export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        component: './Login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      // dashboard
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      // 用户管理
      {
        path: '/account',
        name: 'account',
        icon: 'smile',
        component: './Account',
      },
      // 文章管理
      {
        path: '/article',
        name: 'article',
        icon: 'smile',
        component: './Article',
      },
      {
        path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
        name: 'more-blocks',
        icon: 'block',
      },
      {
        name: 'account-settings',
        icon: 'smile',
        path: '/account-settings',
        component: './account-settings',
      },
    ],
  },
];
