// const titles = [
//   'Alipay',
//   'Angular',
//   'Ant Design',
//   'Ant Design Pro',
//   'Bootstrap',
//   'React',
//   'Vue',
//   'Webpack',
// ];
// const avatars = [
//   'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
//   'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
//   'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
//   'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
//   'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
//   'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
//   'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
//   'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
// ];

// const getNotice = [
//   {
//     id: 'xxx1',
//     title: titles[0],
//     logo: avatars[0],
//     description: '那是一种内在的东西，他们到达不了，也无法触及的',
//     updatedAt: new Date(),
//     member: '科学搬砖组',
//     href: '',
//     memberLink: '',
//   },
//   {
//     id: 'xxx2',
//     title: titles[1],
//     logo: avatars[1],
//     description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
//     updatedAt: new Date('2017-07-24'),
//     member: '全组都是吴彦祖',
//     href: '',
//     memberLink: '',
//   },
//   {
//     id: 'xxx3',
//     title: titles[2],
//     logo: avatars[2],
//     description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
//     updatedAt: new Date(),
//     member: '中二少女团',
//     href: '',
//     memberLink: '',
//   },
//   {
//     id: 'xxx4',
//     title: titles[3],
//     logo: avatars[3],
//     description: '那时候我只会想自己想要什么，从不想自己拥有什么',
//     updatedAt: new Date('2017-07-23'),
//     member: '程序员日常',
//     href: '',
//     memberLink: '',
//   },
//   {
//     id: 'xxx5',
//     title: titles[4],
//     logo: avatars[4],
//     description: '凛冬将至',
//     updatedAt: new Date('2017-07-23'),
//     member: '高逼格设计天团',
//     href: '',
//     memberLink: '',
//   },
//   {
//     id: 'xxx6',
//     title: titles[5],
//     logo: avatars[5],
//     description: '生命就像一盒巧克力，结果往往出人意料',
//     updatedAt: new Date('2017-07-23'),
//     member: '骗你来学计算机',
//     href: '',
//     memberLink: '',
//   },
// ];

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  // 'GET /api/admin/currentUser': {
  //   name: 'Infun',
  //   avatar: 'http://pic.wyfs.top/avatar.jpeg',
  //   userid: '00000001',
  //   email: '973394690@qq.com',
  //   profile: '一个会打篮球的程序员',
  //   title: '前端开发工程师',
  //   group: '北京小叶子科技有限公司-平台事业部-产品研发',
  //   notice: getNotice,
  //   tags: [
  //     {
  //       key: '0',
  //       label: '很有想法的',
  //     },
  //     {
  //       key: '1',
  //       label: '帅气',
  //     },
  //     {
  //       key: '2',
  //       label: 'tall',
  //     },
  //     {
  //       key: '3',
  //       label: '大长腿',
  //     },
  //     {
  //       key: '4',
  //       label: '阳光',
  //     },
  //     {
  //       key: '5',
  //       label: '运动男孩',
  //     },
  //   ],
  //   notifyCount: 12,
  //   unreadCount: 11,
  //   country: 'China',
  //   geographic: {
  //     province: {
  //       label: '北京',
  //       key: '110000',
  //     },
  //     city: {
  //       label: '丰台区',
  //       key: '110100',
  //     },
  //   },
  //   address: '大红门街道世华水岸F区',
  //   phone: '+86-13701016943',
  // },
  // GET POST 可省略
  'GET /api/admin/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  // 'POST /api/admin/login': (req, res) => {
  //   const { password, userName, type } = req.body;
  //   if (password === '123456' && userName === 'admin') {
  //     res.send({
  //       status: 'ok',
  //       type,
  //       currentAuthority: 'admin',
  //     });
  //     return;
  //   }
  //   if (password === '123456' && userName === 'user') {
  //     res.send({
  //       status: 'ok',
  //       type,
  //       currentAuthority: 'user',
  //     });
  //     return;
  //   }
  //   res.send({
  //     status: 'error',
  //     type,
  //     currentAuthority: 'guest',
  //   });
  // },
  'GET /api/admin/user-login/captcha': (req, res) => res.json('captcha-xxx'),
  'POST /api/admin/register': (req, res) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};
