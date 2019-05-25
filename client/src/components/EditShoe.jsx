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
    };
  }

  componentDidMount() {
    const { image_url, name, brand, style, size, upc_id } = this.props;
    this.setState({
      image_url,
      name,
      brand,
      style,
      size,
      upc_id
    });
  }

  render() {
    return (
      <div className="editshoe">
        Image URL: <input type="file" />
        or external link:
        <input type="url" value={this.state.image_url} />
        Name: <input value={this.state.name} />
        Brand: <input value={this.state.brand} />
        Style: <input value={this.state.style} />
        UPC ID: <input value={this.state.upc_id} />
        <button>Submit</button>
      </div>
    );
  }
}

export default EditShoe;
