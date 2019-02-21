export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
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
      {
        name: 'workplace',
        icon: 'smile',
        path: '/workplace',
        component: './Workplace',
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
        routes: [
          {
            path: '/article/edit/:_id',
            hideInMenu: true,
            component: './Article/EditArticle',
          },
          {
            path: '/article/list',
            name: 'articleList',
            component: './Article',
          },
          {
            path: '/article/add',
            name: 'addArticle',
            component: './Article/AddArticle',
          },
        ],
      },
      {
        name: 'accountSetting',
        icon: 'smile',
        path: '/accountSetting',
        component: './AccountSetting',
      },
    ],
  },
];
