import React from 'react';
import Shoe from './Shoe';
import { Add, EditOrDelete } from './AddEditDelete';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showPopUp: false,
      popUpView: ''
    };
    this.onSlotClick = this.onSlotClick.bind(this);
  }

  componentDidMount() {
    //To generate 25 empty slots although in a real site, 
    //this would probably be pulling from an API or database
    const shoeSlots = [];
    for (let i = 0; i < 25; i++) {
      shoeSlots.push({});
    }
    this.setState({
      data: shoeSlots
    })
  }

  onSlotClick(e) {
    this.setState({
      showPopUp: !this.state.showPopUp,
      popUpView: e.currentTarget.getAttribute('data-view')
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div className="app">
        <h1>stockX Mini Shoe Inventory</h1>
        <div className="gridWrapper">
          {this.state.data.map((shoe, i) => (
            <Shoe
             shoe={shoe} 
             key={i}
             onSlotClick={this.onSlotClick}
            />
          ))}
          {this.state.showPopUp ? (this.state.popUpView === 'add' ? <Add /> : <EditOrDelete />) : null}
        </div>
      </div>
    )
  }
}

export default App;