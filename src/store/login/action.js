import API from '../../api'
import createHistory from 'history/createHashHistory'
const history = createHistory()

export const login = (params) => {
  return async dispatch => {
    try {
      let result = await API.login(params)
      console.log(result)
      if(result.code === 0) {
        dispatch({
          type: 'LOGIN',
          userInfo: result.data,
        })
        history.push('/dashboard')
      } else {
        console.log(result.msg)
      }
      
    } catch(err) {
      console.log(err)
    }
  }
}