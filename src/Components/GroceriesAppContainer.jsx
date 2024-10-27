import React, { useState } from "react";
import products from "../data/products"; // import your products.js data
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity === 0) {
      alert("Please add a quantity before adding to cart.");
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const emptyCart = () => setCart([]);

  return (
    <div>
      <ProductsContainer products={products} addToCart={addToCart} />
      <CartContainer
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        emptyCart={emptyCart}
      />
    </div>
  );
}

export default GroceriesAppContainer;
