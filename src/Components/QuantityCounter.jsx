import React from "react";

function QuantityCounter({ quantity, setQuantity, min = 0 }) {
  return (
    <div className="ProductQuantityDiv">
      <button onClick={() => setQuantity(Math.max(min, quantity - 1))}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

export default QuantityCounter;
