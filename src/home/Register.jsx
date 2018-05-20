import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from '../components/Header'
import axios from 'axios'

class Register extends React.Component {
  doRegister = (event) => {
    event.preventDefault();
    let data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    axios.post('http://localhost:3001/register', data)
      .then(res => {
        console.log(res);
        Swal("Register Success", "Please login to using this application", "success").then((value) => {
          this.props.history.push('/login');
        });
      })
      .catch(res => {
        Swal("Upsss", "Something wrongs", "error");
        console.log(res);
      });
    console.log(data);
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
                  Welcome, register first
                </div>
                <div className="card-body">
                  <form onSubmit={this.doRegister.bind(this)}>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input type="text" name="name" className="form-control" id="fullname" placeholder="Enter your name" />
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" />
                      <small className="text-muted">We'll never share your email with anyone else.</small>
                    </fieldset>
                    <fieldset className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                    </fieldset>
                    <Link to="/login">Have an account? login here</Link>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
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

export default Register;
