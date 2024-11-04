import React from "react";

const QuantityCounter = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="QuantityCounter">
      <button onClick={decreaseQuantity} disabled={quantity === 0}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantityCounter;
