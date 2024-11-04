import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item, removeFromCart }) => {
  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <img src={item.image} alt={item.productName} />
        <p>{item.productName}</p>
        <p>Price: {item.price}</p>
        <p>
          Qty: <QuantityCounter quantity={item.quantity} />
        </p>

        <div>
          <p>
            <strong className="Totalbtn">
              Total: $
              {parseFloat(item.price.replace("$", " ") * item.quantity).toFixed(
                2
              )}
            </strong>
          </p>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="Removebtn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
