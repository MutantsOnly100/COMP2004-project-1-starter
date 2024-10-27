import React from "react";
import CartCard from "./CartCard";

function CartContainer({ cart, updateQuantity, removeItem, emptyCart }) {
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((item) => (
          <CartCard
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))
      )}
      <button onClick={emptyCart}>Empty Cart</button>
      <button>Buy - Total: ${totalPrice.toFixed(2)}</button>
    </div>
  );
}

export default CartContainer;
