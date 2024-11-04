import { useState } from "react";

const NavBar = ({ cart, username = "User" }) => {
  const cartIsEmpty = cart.length === 0;

  return (
    <nav className="NavBar">
      <p className="NavDiv">Welcome, {username}!</p>
      <p className="NavTitle">
        <strong>Grocery Store</strong>
      </p>
      <div className="Cart-Container">
        <img
          src={
            cartIsEmpty
              ? "src/assets/cart-empty.png"
              : "src/assets/cart-full.png"
          }
          alt=""
        />
        {!cartIsEmpty && <span className="red-dot"></span>}
      </div>
    </nav>
  );
};

export default NavBar;
