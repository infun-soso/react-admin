import { createStore, combineReducers } from 'redux'
import * as todoReducer from './todo/reducer'

let store = createStore(
  combineReducers({...todoReducer})
)

export default store