import React from 'react';
import EditShoe from './EditShoe';

export default class AddEditDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderEditForm: false
    };
  }

  render() {
    const EditOrDelete = props => (
      <div className="editOrdelete">
        <button onClick={() => this.setState({ renderEditForm: true })}>
          Edit
        </button>
        <button
          onClick={() =>
            this.props.onAddEditDelete(this.props.shoeId, {
              image_url: '',
              name: '',
              brand: '',
              style: '',
              size: '',
              upc_id: ''
            })
          }
        >
          Delete
        </button>
      </div>
    );

    const Add = props => (
      <button onClick={() => this.setState({ renderEditForm: true })}>
        Add
      </button>
    );

    return (
      <div className="addEditDelete">
        {this.props.view === 'add' ? (
          this.state.renderEditForm ? (
            <EditShoe
              onAddEditDelete={this.props.onAddEditDelete}
              shoeId={this.props.shoeId}
              shoeObj={this.props.shoeObj}
            />
          ) : (
            <Add />
          )
        ) : this.state.renderEditForm ? (
          <EditShoe
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
