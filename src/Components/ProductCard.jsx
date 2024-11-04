import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0); // Initialize quantity state

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increase quantity
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Decrease quantity only if it's greater than 0
    }
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      alert("Please select a quantity.");
    } else {
      addToCart(product, quantity);
      setQuantity(0); // This resets quantity after adding to cart
    }
  };

  return (
    <div className="ProductCard">
      <h3>{product.productName}</h3>
      <img src={product.image} alt={product.name} />
      <h4> {product.brand}</h4>
      <p> {product.price}</p>

      <div className="ProductQuantityDiv">
        <button
          className="QuantityBtn"
          onClick={decreaseQuantity}
          disabled={quantity === 0}
        >
          -
        </button>
        <span>{quantity}</span>
        <button className="QuantityBtn" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
