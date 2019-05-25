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
    this.onInputChange = this.onInputChange.bind(this);
    this.handleOnImageUpload = this.handleOnImageUpload.bind(this);
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

  onInputChange(e, type) {
    this.setState({
      [type]: e.target.value
    });
  }

  handleOnImageUpload(e) {
    let image = URL.createObjectURL(e.target.files[0]);
    this.setState({
      image_url: image
    });
  }

  render() {
    return (
      <div className="editshoe">
        Image URL: <input type="file" onChange={this.handleOnImageUpload} />
        or external link:
        <input
          type="url"
          onChange={(e) => this.onInputChange(e, 'image_url')}
          value={this.state.image_url}
        />
        Name:{' '}
        <input
          onChange={(e) => this.onInputChange(e, 'name')}
          value={this.state.name}
        />
        Brand:{' '}
        <input
          onChange={(e) => this.onInputChange(e, 'brand')}
          value={this.state.brand}
        />
        Style:{' '}
        <input
          onChange={(e) => this.onInputChange(e, 'style')}
          value={this.state.style}
        />
        UPC ID:{' '}
        <input
          onChange={(e) => this.onInputChange(e, 'upc_id')}
          value={this.state.upc_id}
        />
        <button onClick={() => this.props.onAddEditDelete(this.props.shoeId, {...this.state})}>Submit</button>
      </div>
    );
  }
}

export default EditShoe;
