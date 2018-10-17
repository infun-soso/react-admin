import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as todoReducer from './todo/reducer'
import * as loginReducer from './login/reducer'

import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({...todoReducer, ...loginReducer}),
  applyMiddleware(thunk)
)

export default store