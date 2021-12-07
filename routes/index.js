const router = require('koa-router')()
const fs = require("fs")

router.get('/', async (ctx, next) => {
   await ctx.render('index', {
    title: 'Hello Koa 2!'
  }) 
})

router.post('/login', async (ctx, next) => {
  const { username, password } =  ctx.request.body
  if (username === 'admin' && password === '123456') {
    ctx.body = {
      code: 200,
      token: 'Token123456',
      message: '登陆成功'
    }
  } else {
    ctx.body = {
      code: 101,
      message: '账号或密码错误'
    }
  }
})

router.post('/logout', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '退出成功'
  }
})

router.get('/info', async (ctx, next) => {
  if (ctx.request.header.token === 'Token123456') {
    ctx.body = {
      code: 200,
      info: {
        name: '请相信光',
        avatar: 'https://img2.baidu.com/it/u=1342701199,2079596281&fm=26&fmt=auto&gp=0.jpg',
        roles: ['admin'],
        token: ctx.request.header.token
      },
      message: '信息返回成功'
    }
  } else {
    ctx.body = {
      code: -401,
      message: '请先登陆'
    }
  }
})

router.get('/menu', async (ctx, next) => {
  if (ctx.request.header.token === 'Token123456') {
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
          children: [
            {
              id: 2,
              pid: 1,
              name: '好用组件',
              path: '/element',
              redirect: '/element/icon',
              component: 'RouteView',
              icon: 'ChromeOutlined',
              key: 'element',
              children: [
                {
                  id: 10,
                  pid: 2,
                  name: '图标组件',
                  path: '/element/icon',
                  redirect: '',
                  component: '/element/icon',
                  icon: '',
                  key: 'el_icon',
                  keepAlive: true
                },
                {
                  id: 11,
                  pid: 2,
                  name: '表格组件',
                  path: '/element/table',
                  redirect: '',
                  component: '/element/table',
                  icon: '',
                  key: 'el_table',
                },
                {
                  id: 12,
                  pid: 2,
                  name: '详情',
                  path: '/element/detail',
                  redirect: '',
                  component: '/element/detail',
                  icon: '',
                  key: 'detail',
                  hidden: true
                }
              ]
            },
            {
              id: 3,
              pid: 1,
              name: '合作打赏',
              path: '/team',
              redirect: '/team/optionc',
              component: 'RouteView',
              icon: 'WechatOutlined',
              key: 'team',
              children: [
                {
                  id: 12,
                  pid: 3,
                  name: '加入维护',
                  path: '/team/join',
                  redirect: '',
                  component: '/team/join',
                  icon: '',
                  key: 'join',
                },
                {
                  id: 13,
                  pid: 3,
                  name: '赞助支持',
                  path: '/team/sponsor',
                  redirect: '',
                  component: '/team/sponsor',
                  icon: '',
                  key: 'sponsor',
                }
              ]
            }
          ]
        },
        {
          id: 4,
          pid: 0,
          name: '更新日志',
          path: '/update',
          redirect: '/update/issue',
          component: 'BasicLayout',
          icon: 'AppleOutlined',
          key: 'lan',
          children: [
            {
              id: 14,
              pid: 4,
              name: '现存问题',
              path: '/update/issue',
              redirect: '',
              component: '/update/issue',
              icon: '',
              key: 'issue',
              keepAlive: true
            },
            {
              id: 15,
              pid: 4,
              name: '更新记录',
              path: '/update/log',
              redirect: '',
              component: '/update/log',
              icon: '',
              key: 'log'
            }
          ]
        },
      ],
      message: '信息返回成功'
    }
  } else {
    ctx.body = {
      code: -401,
      message: '请先登陆'
    }
  }
})

router.get('/table', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '数据列表',
    total: 60,
    current: parseInt(ctx.request.query.current),
    pageSize: 10,
    data: [
      { id: 1, name: '安少华', age: 36, addr: '泥湾区龙门山小区1号楼4单元', phone: '13902056096', industry: '儿童服装', wealth: 5.3 },
      { id: 2, name: '李晟', age: 37, addr: '西湖区湖底公园别墅豪宅1号', phone: '18166618691', industry: '风险投资', wealth: 15.3 },
      { id: 3, name: '王建军', age: 51, addr: '安门区盛世帝府独享私家宅', phone: '19188886166', industry: '资本投资', wealth: 108 },
      { id: 4, name: '马九波', age: 40, addr: '新华区花神庙郦都花苑6栋', phone: '13622315166', industry: '房地产', wealth: 42 },
      { id: 5, name: '李珊珊', age: 30, addr: '西湖区罗华岛3府', phone: '19162061201', industry: '军工产品', wealth: 20 }
    ]
  }
})

router.post('/table/add', async(ctx, next) => {
  ctx.body = {
    code: 200,
    message: '添加成功'
  }
})

router.post('/table/edit', async(ctx, next) => {
  ctx.body = {
    code: 200,
    message: '编辑成功'
  }
})

router.post('/table/del', async(ctx, next) => {
  ctx.body = {
    code: 200,
    message: '删除成功'
  }
})

router.post('/table/upload', async(ctx, next) => {
  ctx.body = {
    code: 200,
    message: '上传成功',
    url: 'https://img2.baidu.com/it/u=1342701199,2079596281&fm=26&fmt=auto&gp=0.jpg'
  }
})

router.get('/table/editGetData', async(ctx, next) => {
  ctx.body = {
    code: 200,
    data: { id: 1, name: '修改数据前查询', age: 36, addr: '泥湾区龙门山小区1号楼4单元', phone: '13902056096', industry: '儿童服装', wealth: 5.3, formnet: '这是表单插槽' },
    message: '编辑成功'
  }
})

router.get('/table/options', async(ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      industry: [{ label:'儿童服装', value: 1 },{ label:'风险投资', value: 2 },{ label:'资本投资', value: 3 },{ label:'房地产', value: 4 },{ label:'军工产品', value: 5 }],
      cat: [{ label: '奥迪', value: 'aodi' },{ label: '宝马', value: 'baoma' },{ label: '沃尔沃', value: 'oero' },{ label: '丰田', value: 'fengt' },{ label: '本田', value: 'bent' }]
    },
    message: '编辑成功'
  }
})

module.exports = router
