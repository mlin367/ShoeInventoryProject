import React from 'react';
import '../css/Shoe.css'

const noShoe = props => (
  <div 
    onClick={props.onSlotClick} 
    className="noShoe"
    data-view="add"
    data-shoe_id={`${props.shoeId}`}
  >
    <h3>Click here to add a shoe!</h3>
  </div>
);

const hasShoe = props => (
  <div 
    onClick={props.onSlotClick} 
    className="hasShoe"
    data-view="edit_remove"
    data-shoe_id={`${props.shoeId}`}  
  >
    <img src={props.shoe.image_url} alt="No Image Uploaded"></img>
    <div className="shoeWrapper">
      <div className="name"><strong>Name</strong>: {props.shoe.name}</div>
      <div className="brand"><strong>Brand</strong>: {props.shoe.brand}</div>
      <div className="style"><strong>Style</strong>: {props.shoe.style}</div>
      <div><strong>Size</strong>: {props.shoe.size}</div>
      <div><strong>UPC ID</strong>: {props.shoe.upc_id}</div>
    </div>
  </div>
);

const Shoe = props => (
  <div className={`shoe ${props.shoe.name !== '' ? 'solid' : 'dashed'}`}>
    {props.shoe.name !== '' ? hasShoe(props) : noShoe(props)}
    <div className="bottomBackground"></div>
  </div>
);

export default Shoe;