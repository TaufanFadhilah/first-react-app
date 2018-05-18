import React from 'react'
import Header from '../components/Header'

class About extends React.Component {
  constructor(){
    super();
    this.state = {
      teams: [
        {id: 1,name: "M. Nanda Putra", title: "Co-Founder & CEO", img: "https://www.tanijoy.id/asset/images/team-nanda.png"},
        {id: 2,name: "Kukuh Budi S.", title: "Co-Founder & COO", img: "https://www.tanijoy.id/asset/images/team-kukuh.png"},
        {id: 3,name: "Febrian Imanda Effendy", title: "Co-Founder & CTO", img: "https://www.tanijoy.id/asset/images/team-febrian.png"},
      ]
    };
  }
  render () {
    return (
      <div>
        <Header></Header>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h1>About Tanijoy</h1>
            </div>
            <div className="col-md-12">
              <p>
                Tanijoy merupakan wirausaha sosial yang bertujuan untuk membantu petani kecil agar terlepas dari kemiskinan. Khususnya petani kecil di daerah pedesaan yang masih belum melek teknologi. Pada awalnya kita memulai dari daerah Jawa Barat yaitu Kabupaten Bogor sebagai proyek pertama kami dalam memberdayakan petani kecil di Sukawangi.
              </p>
            </div>
            <div className="col-md-12">
              <h3>Visi</h3>
              <p>
                Bring the happiness of Life through Agriculture.
              </p>
              <h3>Misi</h3>
              <ol>
                <li>Applying technology for better agriculture.</li>
                <li>Empowering local community.</li>
                <li>Increasing economic livelihood.</li>
                <li>Creating agripreneur in rural area.</li>
                <li>Collaborating with people to build a better agriculture.</li>
              </ol>
            </div>
            <div className="col-md-12">
              <h3>Our Team</h3>
            </div>
            {
              this.state.teams.map((team) => {
                return(
                  <div className="col-md-4" key={team.id}>
                    <div className="card">
                      <img className="card-img-top" src={team.img} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{team.name}</h5>
                        <p className="card-text">{team.title}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default About;
