import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Swal from 'sweetalert2'
import Header from '../components/Header'

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    toDashboard: false
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.email == "admin@tanijoy.id" && this.state.password == "password") {
      Swal("Welcome "+this.state.email, "Enjoy the website", "success").then((value) => {
        this.props.history.push('/dashboard');
      });
      this.setState({
        toDashboard: true
      });
    }else{
      Swal("Upsss", "Wrong email or password", "error");
      this.setState({
        email: '',
        password: '',
        toDashboard: false
      });
    }
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
                  <form action="" onSubmit={this.onSubmit.bind(this)}>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange.bind(this)} />
                      <small className="text-muted">We'll never share your email with anyone else.</small>
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange.bind(this)} />
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
