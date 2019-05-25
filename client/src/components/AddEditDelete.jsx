import React from 'react';
import EditShoe from './EditShoe';

export class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderEditForm: false
    }
  }

  render() {
    return (
      <div>
        {this.state.renderEditForm ? <EditShoe /> : <button onClick={() => this.setState({renderEditForm: true})}>Add</button>}
      </div>
    )
  }
}

export const EditOrDelete = props => (
  <div className="editOrdelete">
    <button>Edit</button>
    <button>Delete</button>
  </div>
);
