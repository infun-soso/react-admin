import { getArticleList, addArticle, getArticle, editArticle } from '@/services/article';
import { message } from 'antd';

export default {
  namespace: 'article',

  state: {
    articleList: [],
    post: {},
  },

  effects: {
    *getArticleList(_, { call, put }) {
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
      if (response.code === 0) {
        message.success('添加成功');
      } else {
        message.error(response.msg);
      }
    },
    *getArticle({ payload }, { call, put }) {
      const response = yield call(getArticle, payload);
      if (response.code === 0) {
        yield put({
          type: 'savePost',
          payload: response.data,
        });
      } else {
        message.error(response.msg);
      }
    },
    *editArticle({ payload }, { call }) {
      const response = yield call(editArticle, payload);
      const { code, msg } = response;
      if (code === 0) {
        message.success('修改成功');
      } else {
        message.error(msg);
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
    savePost(state, action) {
      return {
        ...state,
        post: action.payload,
      };
    },
  },
};
