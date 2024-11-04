import { useState } from "react";
import CartCard from "./CartCard";

const CartContainer = ({ cart, removeFromCart, emptyCart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <>
      <div className="CartContainer">
        <div className="Insidebox">
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <>
              <h2>Cart items: {totalItems}</h2>
              {cart.map((item) => (
                <CartCard
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="cart-actions">
        <button onClick={emptyCart} className="empty-cart-btn">
          Empty Cart
        </button>
        <button className="checkout-btn">
          Check Out: ${totalPrice.toFixed(2)}
        </button>
      </div>
    </>
  );
};

export default CartContainer;
