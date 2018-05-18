import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const Register = (props) => {
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
                  <Link to="/login">Have an account? login here</Link>
                  <br></br>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
