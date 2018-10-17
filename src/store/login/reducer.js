let defaultState = {
  username: '',
  password: ''
}

export const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
     return Object.assign({}, state, action.userInfo)
    default: 
     return state
  }
}