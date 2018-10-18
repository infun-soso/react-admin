import API from '../../api'
import createHistory from 'history/createHashHistory'
import { message } from 'antd'
const history = createHistory()

export const login = (params) => {
  return async dispatch => {
    try {
      let result = await API.login(params)
      if(result.code === 0) {
        dispatch({
          type: 'LOGIN',
          userInfo: result.data,
        })
        message.success(result.msg)
        history.push('/dashboard')
      } else {
        message.error(result.msg)
      }
      
    } catch(err) {
      console.log(err)
    }
  }
}