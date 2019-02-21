import { fetchAccounts } from '@/services/account';

export default {
  namespace: 'account',

  state: {
    accountList: [],
  },

  effects: {
    *fetchAccounts(_, { call, put }) {
      const response = yield call(fetchAccounts);
      const { code, data, msg } = response;
      console.log(response);
      if (code === 0) {
        yield put({
          type: 'saveList',
          payload: data,
        });
      } else {
        console.log(msg);
      }
    },

    *deleteAccount({ payload }, { put }) {
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
        accountList: action.payload.accounts,
      };
    },
    delete(state, action) {
      console.log(action);
      const { payload } = action;
      return {
        ...state,
        accountList: state.accountList.filter((item, index) => index !== payload),
      };
    },
  },
};
