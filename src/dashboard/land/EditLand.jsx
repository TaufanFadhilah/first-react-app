import React from 'react'
import axios from 'axios'
import swal from 'sweetalert2'

class EditLand extends React.Component {
  constructor(props){
      super(props);
  }

  onSubmit = (event) => {
    event.persist()
    event.preventDefault();

    var formData = new FormData();
    formData.append('id', this.props.land.id);
    formData.append('name', event.target.name.value);
    formData.append('area', event.target.area.value);
    formData.append('doc', event.target.doc.files[0]);

    axios.post('http://localhost:3001/updateLand', formData)
      .then(res => {
        swal("Success", event.target.name.value + " updated!", "success");
        document.getElementById("#"+this.props.land.id).click();
      })
      .catch(res => {
        swal("Upsss", "Something wrongs", "error");
      });
  }

  render () {
    return (
      <div>
        <button id={"#"+this.props.land.id} type="button" className="btn btn-warning mr-2" data-toggle="modal" data-target={"#"+this.props.land.id}>
          Edit
        </button>


        <div className="modal fade" id={this.props.land.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit : {this.props.land.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.onSubmit.bind(this)}>
              <div className="modal-body">
                  <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter name" defaultValue={this.props.land.name} />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Area</label>
                    <input type="number" name="area" className="form-control" placeholder="Enter area" defaultValue={this.props.land.area} />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="exampleInputEmail1">Document</label>
                    <input type="file" name="doc" className="form-control" placeholder="Enter document" />
                  </fieldset>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-warning">Save changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditLand;
