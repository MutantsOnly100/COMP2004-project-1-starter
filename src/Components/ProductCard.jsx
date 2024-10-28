import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const price = parseFloat(product.price.replace("$", ""));

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>Brand: {product.brand}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
