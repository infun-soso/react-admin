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
        redirect: '/workplace',
      },
      {
        name: 'workplace',
        icon: 'dashboard',
        path: '/workplace',
        component: './Workplace',
      },
      // 用户管理
      {
        path: '/account',
        name: 'account',
        icon: 'user',
        component: './Account',
      },
      // 文章管理
      {
        path: '/article',
        name: 'article',
        icon: 'edit',
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
        name: 'personal',
        icon: 'setting',
        path: '/personal',
        routes: [
          {
            name: 'center',
            path: '/personal/account-center',
            component: './Personal/AccountCenter',
          },
          {
            name: 'settings',
            path: '/personal/account-setting',
            component: './Personal/AccountSetting',
          },
        ],
      },
    ],
  },
];
