import React, { Component } from 'react';
import Layouts from './layout';
import './App.css';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Layouts/>
      </Router>
    );
  }
}

export default App;
