import React from 'react'
import PropTypes from 'prop-types'

const CreateLand = (props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
            <div className="modal-body">
              <form>
                <fieldset className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" placeholder="Enter name" />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="exampleInputEmail1">Area</label>
                  <input type="number" className="form-control" placeholder="Enter area" />
                </fieldset>
                <fieldset className="form-group">
                  <label htmlFor="exampleInputEmail1">Document</label>
                  <input type="file" className="form-control" placeholder="Enter document" />
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLand