import React from 'react';
import Shoe from './Shoe';
import AddEditDelete from './AddEditDelete';
import shoeSlots from '../../data/sampleData';
import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showPopUp: false,
      popUpView: '',
      currentShoeId: null
    };
    this.onSlotClick = this.onSlotClick.bind(this);
    this.onAddEditDelete = this.onAddEditDelete.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  componentDidMount() {
    //Sample data has two objects and generates 23 empty objects 
    //although in a real site, this would probably be pulling from 
    //an API or database
    this.setState({
      data: shoeSlots
    });
  }

  onSlotClick(e) {
    this.setState(
      {
        showPopUp: true,
        popUpView: e.currentTarget.getAttribute('data-view'),
        currentShoeId: e.currentTarget.dataset.shoe_id
      },
      () => console.log(this.state)
    );
  }

  onAddEditDelete(shoeId, newObj, addOrEdit) {
    if (
      addOrEdit &&
      ( newObj.name === '' ||
        newObj.brand === '' ||
        newObj.style === '' ||
        newObj.style === '' ||
        newObj.size === '' ||
        newObj.upc_id === '')
    ) {
      alert('All fields except image upload have to be filled!');
    } else {
      let newData = [...this.state.data];
      newData[shoeId] = newObj;
      this.setState({
        data: newData
      });
      return true;
    }
  }

  onCancel() {
    this.setState({
      showPopUp: false
    });
  }

  render() {
    return (
      <div className="app">
        <div className="logoWrapper">
          <img src="https://stockx-assets.imgix.net/logo/stockx-homepage-logo-dark.svg?auto=compress,format"></img>
          <h1>Mini Shoe Inventory</h1>
        </div>
        <div className="gridWrapper">
          {this.state.data.map((shoe, i) => (
            <Shoe
              shoe={shoe}
              key={i * 0.1}
              shoeId={i}
              onSlotClick={this.onSlotClick}
            />
          ))}
          {this.state.showPopUp ? (
            <AddEditDelete
              onAddEditDelete={this.onAddEditDelete}
              onCancel={this.onCancel}
              shoeId={this.state.currentShoeId}
              shoeObj={{ ...this.state.data[this.state.currentShoeId] }}
              view={this.state.popUpView}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
