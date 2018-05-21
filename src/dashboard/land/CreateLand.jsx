import React from 'react'
import axios from 'axios'
import formData from 'react-form-data'
import swal from 'sweetalert2'
class CreateLand extends React.Component {

  state = {
    modal: 'modal fade'
  }

  onSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append('name', event.target.name.value);
    formData.append('area', event.target.area.value);
    formData.append('doc', event.target.doc.files[0]);

    axios.post('http://localhost:3001/land', formData)
      .then(res => {
        swal("Success", "New land inserted", "success");
        document.getElementById("btnAddModal").click();
      })
      .catch(res => {
        swal("Upsss", "Something wrongs", "error");
      });
    }



  render () {
    return (
      <div>
        <button id="btnAddModal" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Add Land
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Input new land</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.onSubmit.bind(this)}>
              <div className="modal-body">
                  <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" name="name" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Area</label>
                    <input type="number" className="form-control" placeholder="Enter area" name="area" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Document</label>
                    <input type="file" className="form-control" placeholder="Enter document" name="doc" />
                  </fieldset>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateLand;
