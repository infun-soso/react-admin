import mockjs from 'mockjs';

export default {
  'GET /api/getAccountList': (req, res) => {
    res.send({
      code: 0,
      data: mockjs.mock({
        'accounts|5-10': [
          {
            // 随机生成5到10个数组元素
            username: '@cname', // 中文名称
            email: '@email',
            phone: /^1[385][1-9]\d{8}/, // 18至28以内随机整数, 0只是用来确定类型
            profile: '@csentence',
            type: '@pick(["普通用户", "管理员", "会员"])',
            create_time: '@date("yyyy-MM-dd")', // 日期
          },
        ],
      }),
      msg: 'ok',
    });
  },
};
