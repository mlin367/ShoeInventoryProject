import React from 'react';
import EditShoe from './EditShoe';

export default class AddEditDelete extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        renderEditForm: false
      }
    }
    
    render() {
      
      const EditOrDelete = props => (
        <div className="editOrdelete">
          <button onClick={() => this.setState({renderEditForm: true})}>Edit</button>
          <button>Delete</button>
        </div>
      );

      const Add = props => (
        <button onClick={() => this.setState({renderEditForm: true})}>Add</button>
      );

      return (
        <div className="addEditDelete">
          {this.props.view === 'add' ? (this.state.renderEditForm ? <EditShoe /> : <Add />) : 
            (this.state.renderEditForm ? <EditShoe /> : <EditOrDelete />)
          }
        </div>
      )
  }
}

