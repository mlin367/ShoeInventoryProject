import React from 'react';
import '../css/EditShoe.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    const { image_url, name, brand, style, size, upc_id } = this.props.shoeObj;
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
      <div className="editshoe-modal">
        <div className="editshoe">
          <Button variant="contained" component="label">
            Upload Image
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={this.handleOnImageUpload}
            />
          </Button>
          <br />
          OR
          <TextField
            multiline
            label="Image Link"
            type="url"
            onChange={e => this.onInputChange(e, 'image_url')}
            value={this.state.image_url}
          />
          <TextField
            multiline
            label="Name"
            onChange={e => this.onInputChange(e, 'name')}
            value={this.state.name}
          />
          <TextField
            multiline
            label="Brand"
            onChange={e => this.onInputChange(e, 'brand')}
            value={this.state.brand}
          />
          <TextField
            multiline
            label="Style"
            onChange={e => this.onInputChange(e, 'style')}
            value={this.state.style}
          />
          <TextField
            multiline
            label="Size"
            onChange={e => this.onInputChange(e, 'size')}
            value={this.state.size}
          />
          <TextField
            multiline
            label="UPC ID"
            onChange={e => this.onInputChange(e, 'upc_id')}
            value={this.state.upc_id}
          />
          <br />
          <div className="editShoeButtons">
            <Button
              onClick={() => {
                if (
                  this.props.onAddEditDelete(
                    this.props.shoeId,
                    { ...this.state },
                    true
                  ) === true
                ) {
                  this.props.onCancel();
                }
              }}
            >
              Submit
            </Button>
            <Button onClick={this.props.onCancel}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditShoe;
