import React from 'react';

const noShoe = (
  <div className="noShoe">
    <h3>Click here to add a shoe!</h3>
  </div>
);

const hasShoe = shoe => (
  <div className="hasShoe">
    <img></img>
    <div>Name: {shoe.name}</div>
    <div>Brand: {shoe.brand}</div>
    <div>Style: {shoe.style}</div>
    <div>Size: {shoe.size}</div>
    <div>UPC ID: {shoe.upcId}</div>
  </div>
);

const Shoe = ({ shoe }) => (
  <div className="shoe">
    {shoe.name ? hasShoe(shoe) : noShoe}
  </div>
);

export default Shoe;