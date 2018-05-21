import React from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import CreateLand from './CreateLand'
import EditLand from './EditLand'
class Land extends React.Component {

  componentWillMount(){
    axios.get('http://localhost:3001/land')
      .then(res => {
        // this.state = {
        //   lands: res.data.data
        // };
        this.setState({
          lands: res.data.data
        });
        console.log(this.state);
        console.log("Mount");
      })
      .catch(res => {
        alert("Something error");
        console.log(res);
      });
  }

  onDelete = (land) => {
    // let id = land.id;
    let data = {
      id: land.id
    }
    axios.post('http://localhost:3001/deleteLand',data)
      .then(res => {
        swal("Success", land.name + " deleted!", "success");
      })
      .catch(res => {
        swal("Error", "Somethings wrong", "error");
      });
  }

  render () {
    if (!this.state) {
          return (
              <div>Loading...</div>
          );
      }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h3>Land List</h3>
          </div>
          <div className="col-md-3">
            <CreateLand></CreateLand>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Area (m2)</th>
                  <th scope="col">Document</th>
                  <th colSpan="2" >Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.lands.map((land) => {
                    return (
                      <tr key={land.id}>
                        <th scope="row">{land.id}</th>
                        <td>{land.name}</td>
                        <td>{land.area}</td>
                        <td>
                          <a href="#">Download</a>
                        </td>
                        <td><EditLand land={land}></EditLand></td>
                        <td>
                          <button className="btn btn-danger" onClick={this.onDelete.bind(this, land)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Land;
