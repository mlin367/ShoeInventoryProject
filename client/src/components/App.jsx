import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    //To generate 25 empty slots although in a real site, 
    //this would probably be pulling from an API or database
    const shoeSlots = [];
    for (const i = 0; i < 25; i++) {
      shoeSlots[i] = {};
    }
    this.setState({
      data: shoeSlots
    })
  }

  render() {
    return (
      <div className="app">
        <h1>stockX Mini Shoe Inventory</h1>
        <div className="gridWrapper">

        </div>
      </div>
    )
  }
}

export default App;