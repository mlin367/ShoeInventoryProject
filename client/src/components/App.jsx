import React from 'react';
import Shoe from './Shoe';
import AddEditDelete from './AddEditDelete';

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
    //To generate 25 empty slots although in a real site,
    //this would probably be pulling from an API or database
    const shoeSlots = [];
    for (let i = 0; i < 25; i++) {
      shoeSlots.push({
        image_url: '',
        name: '',
        brand: '',
        style: '',
        size: '',
        upc_id: ''
      });
    }
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

  onAddEditDelete(shoeId, newObj) {
    let newData = [...this.state.data];
    newData[shoeId] = newObj;
    this.setState({
      data: newData
    });
  }

  onCancel() {
    this.setState({
      showPopUp: false
    })
  }

  render() {
    return (
      <div className="app">
        <h1>stockX Mini Shoe Inventory</h1>
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
