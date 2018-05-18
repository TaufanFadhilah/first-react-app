import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home/Home'
import About from './home/About'
import Login from './home/Login'
import Register from './home/Register'

import Dashboard from './dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>

          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
