import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Header from '../components/Header'

class Login extends React.Component {

  state = {
    user: ''
  }

  doLogin = (event) => {
    event.preventDefault();
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    axios.post('http://localhost:3001/login', user)
    .then(res => {
      let name = res.data['data'][0].name;
      this.setState({
        user: res.data['data'][0]
      });
      Swal("Login Success", "Welcome " + name + ", please enjoy the apps", "success").then((value) => {
        this.props.history.push('/dashboard', {user : this.state.user});
      });
    })
    .catch(res => {
      Swal("Upsss", "Wrong email or password", "error");
      console.log(res);
    });
  }

  render () {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-header">
                  Welcome, login first
                </div>
                <div className="card-body">
                  <form action="" onSubmit={this.doLogin.bind(this)}>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" />
                      <small className="text-muted">We'll never share your email with anyone else.</small>
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
                    </fieldset>
                    <Link to="/register">Create new account here</Link>
                    <br></br>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
