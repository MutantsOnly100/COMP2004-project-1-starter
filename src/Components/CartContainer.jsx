import React from "react";
import CartCard from "./CartCard";

function CartContainer({ cart, updateQuantity, removeItem, emptyCart }) {
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="CartContainer">
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
      <div className="CartListBtns">
        <button onClick={emptyCart} className="RemoveButton">
          Empty Cart
        </button>
        <button id="BuyButton">Buy - Total: ${totalPrice.toFixed(2)}</button>
      </div>
    </div>
  );
}

export default CartContainer;
