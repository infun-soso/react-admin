import { fetchUsers, delUser } from '@/services/user';
import { message } from 'antd';

export default {
  namespace: 'user',

  state: {
    userList: [],
  },

  effects: {
    *fetchUsersList(_, { call, put }) {
      const response = yield call(fetchUsers);
      const { code, data, msg } = response;
      if (code === 0) {
        yield put({
          type: 'saveList',
          payload: data,
        });
      } else {
        console.log(msg);
      }
    },

    *deleteUser({ payload }, { call, put }) {
      const response = yield call(delUser, payload);
      if (response.code === 0) {
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
      yield put({
        type: 'delete',
        payload,
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        userList: action.payload,
      };
    },
    delete(state, action) {
      const { payload } = action;
      return {
        ...state,
        userList: state.userList.filter(item => item._id !== payload),
      };
    },
  },
};
