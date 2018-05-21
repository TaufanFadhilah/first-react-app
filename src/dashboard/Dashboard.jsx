import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import Sidebar from './Sidebar'
import Profile from './profile/Profile'
import Land from './land/Land'

class Dashboard extends React.Component {

  constructor(props){
    super();
    if (!props.history.location.state) {
      window.location.replace("/login");
    }
    this.state = props.history.location.state;
  }

  componentWillReceiveProps(nextProps) {
    this.state = nextProps.history.location.state;
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-5">
          <Link className="navbar-brand" to='/dashboard'>Dashboard</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={() => {window.location.replace("/login");}}>Logout</a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
               <Sidebar user={this.state.user}></Sidebar>
            </div>
            <div className="col-md-10">
              <Route exact path='/dashboard' render={() => <h3>Welcome {this.state.user.name}</h3>} />
              <Route path='/dashboard/profile' component={Profile} />
              <Route path='/dashboard/land' component={Land} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
