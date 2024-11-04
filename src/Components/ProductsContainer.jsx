import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsContainer;
