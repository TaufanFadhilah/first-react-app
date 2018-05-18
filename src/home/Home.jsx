import React from 'react'
import Header from '../components/Header'
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <img src="https://www.tanijoy.id/asset/images/footer-logo.png" alt="Tanijoy Logo" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
