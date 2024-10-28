import React from "react";
import QuantityCounter from "./QuantityCounter";

function CartCard({ item, updateQuantity, removeItem }) {
  const price = parseFloat(item.price.replace("$", ""));
  const subtotal = price * item.quantity;

  return (
    <div className="CartCard">
      <img src={item.image} alt={item.productName} />
      <div className="CartCardInfo">
        <h3>{item.productName}</h3>
        <p>Brand: {item.brand}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${price.toFixed(2)}</p>
        <QuantityCounter
          quantity={item.quantity}
          setQuantity={(newQuantity) => updateQuantity(item.id, newQuantity)}
          min={1}
        />
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
      </div>
      <button onClick={() => removeItem(item.id)} className="RemoveButton">
        Remove Item
      </button>
    </div>
  );
}

export default CartCard;
