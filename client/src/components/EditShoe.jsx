import React from 'react';

class EditShoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      name: '',
      brand: '',
      style: '',
      size: '',
      upc_id: ''
    }
  }

  render() {
    return (
      <div className="editshoe">
        Image URL: <input type="file" />
        or external link: 
        <input 
          type="url"
          value={this.state.image_url}
        />
        Name: <input />
        Brand: <input />
        Style: <input />
        UPC ID: <input /> 
      </div>
    )
  }
}

export default EditShoe;