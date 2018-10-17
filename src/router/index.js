import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Layouts from '../layout'
import Login from '../pages/login'
import { Provider } from 'react-redux'
import store from '../store'
import './index.css'

class App extends Component {
  render() {
    const { userReducer } = store.getState()
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect exact from="/" to={userReducer.username ? '/dashboard' : '/login'}></Redirect>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Layouts}/>
          </Switch>  
        </Router>
      </Provider>
    )
  }
}

export default App
