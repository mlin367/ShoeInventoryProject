import React from 'react';
import EditShoe from './EditShoe';
import '../css/AddEditDelete.css'

export default class AddEditDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderEditForm: false
    };
  }

  render() {
    const EditOrDelete = props => (
      <div className="editOrdelete-modal">
        <div className="editOrdelete">
          <button onClick={() => this.setState({ renderEditForm: true })}>
            Edit
          </button>
          <button
            onClick={() => {
              this.props.onAddEditDelete(this.props.shoeId, {
                image_url: '',
                name: '',
                brand: '',
                style: '',
                size: '',
                upc_id: ''
              })
              this.props.onCancel();
            }
            }
          >
            Delete
          </button>
          <button onClick={this.props.onCancel}>Cancel</button>
        </div>
      </div>
    );


    return (
      <div className="addEditDelete">
        {this.props.view === 'add' ? 
            <EditShoe
              onCancel={this.props.onCancel}
              onAddEditDelete={this.props.onAddEditDelete}
              shoeId={this.props.shoeId}
              shoeObj={this.props.shoeObj}
            />
          : this.state.renderEditForm ? (
          <EditShoe
            onCancel={this.props.onCancel}
            onAddEditDelete={this.props.onAddEditDelete}
            shoeId={this.props.shoeId}
            shoeObj={this.props.shoeObj}
          />
        ) : (
          <EditOrDelete />
        )}
      </div>
    );
  }
}
