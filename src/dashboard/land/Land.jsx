import React from 'react'
import PropTypes from 'prop-types'
import CreateLand from './CreateLand'
import EditLand from './EditLand'
class Land extends React.Component {
  state = {
    lands : [
      {id: 1, name: 'Bogor', area: 120, doc: ''},
      {id: 2, name: 'Malang', area: 140, doc: ''},
      {id: 3, name: 'Bandung', area: 20, doc: ''},
    ]
  }
  render () {
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
                          <button className="btn btn-danger">Delete</button>
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
