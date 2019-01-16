import { getArticleList } from '@/services/article';

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
