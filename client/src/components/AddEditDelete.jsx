import React from 'react';
import EditShoe from './EditShoe';
import '../css/AddEditDelete.css'
import Button from '@material-ui/core/Button';

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
          <Button onClick={() => this.setState({ renderEditForm: true })}>
            Edit
          </Button>
          <Button
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
          </Button>
          <Button onClick={this.props.onCancel}>Cancel</Button>
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
