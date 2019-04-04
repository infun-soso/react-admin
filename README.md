## 前言

公司技术栈是Vue，平时写业务的时候Vue居多，所以比较熟悉，刚好要搭建自己的博客，为了便于SEO，所以博客前端部分使用了 `Nuxt` 进行服务器渲染。再加上`Element-ui` 这样的ui框架，目的也是为了将平时使用的Vue相关知识点串联起来，再最后做一次总结和复盘。

在业余时间学习了`react`，被其深深吸引，想着写点什么东西检验一下自己学到的知识，索性使用`react`框架搭建博客的后台管理系统，ui框架使用了`antd`，脚手架则为很强大的`umi`(强烈推荐)。

所有api都放在了`koa2-api`这个项目当中，下面会提到。

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

## 博客介绍

### 博客前端

- 技术栈 （基于 `vue-cli` 脚手架）
  - Vue
  - nuxt v2.0.0
  - Element-ui
  - weback
  - so on...

- [项目地址](https://github.com/infun-soso/vue-client)
- [预览地址](https://blog.wyfs.top/home)
  - 用户可以通过邮箱自行创建账户
  - 用户登录过后即可发表评论
  - 如若有博客文章技术观点有所纰漏，请小伙伴们指正，我会尽快修改与完善

### 后台管理系统

- 技术栈 
  - react + react-router
  - umi + dva
  - antd + ant-design-pro
  - mockjs
  - markdown

- [项目地址](https://github.com/infun-soso/koa2-api)
  - 后台管理系统主要用于文章和用户的管理
  - 后台管理系统基于`ant-design-pro`设计风格简约，美观。
  - 我在后台管理系统中整理了一些react常用的知识点和组件，以便日后的学习和工作

### 支持博客的api

- 技术栈
  - koa2 + koa2-router
  - nodeman
  - koa-jwt + jsonwebtoken
  - mongoose
  - Qiniu

### 实现功能

- [x] 主页 + 列表页 + 搜索页 + 后台增删改查文章等
- [x] 评论与回复功能模块
- [x] 用户登录注册，以及权限管理 (koa-jwt + localStorage)
- [x] markdown 代码高亮
- [x] 锚点导航 回到顶部
- [x] 响应式开发

## 开启项目

### 博客前端

```bash
git clone git@github.com:infun-soso/vue-client.git

cd vue-client

npm i --registry=https://registry.npm.taobao.org

npm run dev
```

### 后台管理系统

```bash
git clone git@github.com:infun-soso/react-admin.git

cd react-admin

yarn i

npm run dev
```

### api

创建一个 my_blog 的 mongoDB 数据库，修改配置去连接你的数据库。

```bash
cd koa2-api
npm i --registry=https://registry.npm.taobao.org
npm run start
```

## 总结

从零开发个人博客，整个过程踩了不少坑，有的顺利解决，有的尚未解决，但是回头看看目前阶段的博客，心中还是有一丢丢成就感的~

重要的是可以将学到的东西都用在里面，做到温故而知新。接下来我也会继续开发这个博客，将更多更好的功能添加进去，同时也要让自己的技术更加完善。

PS : 觉得不错的伙伴可以给个 star ~~~ 或者 fork 下来看看哦。如果有什么建议，也可以提 issue 哦
