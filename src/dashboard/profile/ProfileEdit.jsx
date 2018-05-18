import React from 'react'
import PropTypes from 'prop-types'

class ProfileEdit extends React.Component {
  render () {
    return (
      <div>
        <h3>Update your profile</h3>
        <hr />
        <form>
          <fieldset class="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input type="text" class="form-control" id="fullname" placeholder="Enter your name" />
          </fieldset>
          <fieldset class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
            <small class="text-muted">We'll never share your email with anyone else.</small>
          </fieldset>
          <fieldset class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" />
          </fieldset>
          <br></br>
          <button type="submit" class="btn btn-warning">Save</button>
        </form>
      </div>
    )
  }
}

export default ProfileEdit;
