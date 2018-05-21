import React from 'react'
import axios from 'axios'
import swal from 'sweetalert2'

class ProfileEdit extends React.Component {
  constructor(props){
    super();
    this.state = props.history.location.state;
  }

  doUpdate = (event) => {
    event.preventDefault();
    let user = {
      id: event.target.id.value,
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }
    axios.post('http://localhost:3001/updateProfile', user)
      .then(res => {
        this.setState(user)
        swal("Update Success", "Your profile has been updated", "success").then((value) => {
          this.props.history.push('/dashboard', {user : this.state});
        });
      })
      .catch(res => {
        swal("Upsss", "Something wrongs", "error");
      });

  }
  render () {
    return (
      <div>
        <h3>Update your profile</h3>
        <hr />
        <form onSubmit={this.doUpdate.bind(this)}>
          <input type="hidden" name="id" defaultValue={this.state.id}></input>
          <fieldset className="form-group">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter your name" defaultValue={this.state.name} />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter your email" defaultValue={this.state.email} />
            <small className="text-muted">We'll never share your email with anyone else.</small>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" defaultValue={this.state.password} />
          </fieldset>
          <br></br>
          <button type="submit" className="btn btn-warning">Save</button>
        </form>
      </div>
    )
  }
}

export default ProfileEdit;
