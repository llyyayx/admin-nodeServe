## 简介

本项目是为[vue3-antd-admin](https://github.com/llyyayx/vue3-antd-admin)开源项目提供后台api接口，内部无复杂逻辑只是一些简单的假数据，使用者可以修改接口数据达到临时开发的目的，本项目代替不了正式项目的后台接口。

## 安装

```sh
# 克隆项目
git clone git@github.com:llyyayx/admin-nodeServe.git

# 进入项目目录
cd admin-nodeServe

# 安装依赖
npm install

# 本地开发 启动项目
npm run dev
```

默认端口：8080

## 修改默认端号

在bin目录下修改www

```js
// 修改此处
var port = normalizePort(process.env.PORT || '8010');
```

## 添加页面

在routes目录下inde.js文件内，在 `/menu` 路由内按规则添加树形结构即可，但是注意模板路径一定要添加正确，可以参照demo添加。

```js
ctx.body = {
  code: 200,
  data: [
    { 
      id: 1,
      pid: 0,
      name: '基础模板',
      path: '/',
      redirect: '/element/icon',
      component: 'BasicLayout',
      icon: 'AppleOutlined',
      key: 'layout',
      children: [....]
    }
  ]
}
```
component的配置可选值  

BasicLayout: 框架主体，RouteView：路由无页面，view目录下的页面

具体配置请参照文档： [传送门](http://www.lelebk.com/docs/guide/essentials/router-and-nav.html)

## 交流

遇到问题请加群可以提供帮助，同时也可以加入项目维护中来：

QQ 群 719251151