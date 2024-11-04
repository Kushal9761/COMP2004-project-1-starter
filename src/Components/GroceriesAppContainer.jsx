import { useState } from "react";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  // This is a function to add product to the cart, handling existing items and new additions
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // This function removes a product from the cart by its ID
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // function to empty the whole cart by resetting the state to an empty array
  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <NavBar cart={cart} />
      <div className="Allproducts">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
