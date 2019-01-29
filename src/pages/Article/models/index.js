import { getArticleList, addArticle } from '@/services/article';
import { message } from 'antd';

export default {
  namespace: 'article',

  state: {
    articleList: [],
  },

  effects: {
    *getArticleList(_, { call, put }) {
      console.log('dispatch');
      const response = yield call(getArticleList);
      const { code, data, msg } = response;
      if (code === 0) {
        yield put({
          type: 'saveList',
          payload: Array.isArray(data) ? data : [],
        });
      } else {
        console.log(msg);
      }
    },
    *addArticle({ payload }, { call }) {
      const response = yield call(addArticle, payload);
      console.log(response);
      if (response.code === 0) {
        message.success('添加成功');
      } else {
        message.error(response.msg);
      }
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        articleList: action.payload,
      };
    },
  },
};
