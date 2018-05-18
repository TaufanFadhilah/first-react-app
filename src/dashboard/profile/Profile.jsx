import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ProfileEdit from './ProfileEdit'

class Profile extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5>
              <Link to="/dashboard/profile/edit">Edit</Link>
            </h5>
          </div>
          <div className="col-md-12 mt-2">
            <Route exact path='/dashboard/profile' render={() =>
                <div>
                  <h3>My Profile</h3>
                  <hr />
                  <p>Name : </p>
                  <h6>Taufan Fadhilah Iskandar</h6>
                  <p>Email : </p>
                  <h6>taufanfadhilahiskandar@gmail.com</h6>
                </div>
                } />
              <Route path="/dashboard/profile/edit" component={ProfileEdit} />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
