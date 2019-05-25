import React from 'react';

const noShoe = props => (
  <div 
    onClick={props.onSlotClick} 
    className="noShoe"
    data-view="add"
  >
    <h3>Click here to add a shoe!</h3>
  </div>
);

const hasShoe = props => (
  <div 
    onClick={props.onSlotClick} 
    className="hasShoe"
    data-view="edit_remove"  
  >
    <img></img>
    <div>Name: {props.shoe.name}</div>
    <div>Brand: {props.shoe.brand}</div>
    <div>Style: {props.shoe.style}</div>
    <div>Size: {props.shoe.size}</div>
    <div>UPC ID: {props.shoe.upc_id}</div>
  </div>
);

const Shoe = props => (
  <div className="shoe">
    {props.shoe.name ? hasShoe(props) : noShoe(props)}
  </div>
);

export default Shoe;