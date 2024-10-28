import React, { useState } from "react";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity === 0) {
      alert("Quantity must not be 0");
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id); // Check if the product is already in the cart
      if (existingProduct) {
        return prevCart.map(
          (item) =>
            item.id === product.id // For each item, it checks if the item's id matches the product id.
              ? { ...item, quantity: item.quantity + quantity } // If it does, add quantity
              : item // If not, return original value
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
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); // Set cart to have everything in the original cart except the one user wants to remove
  };

  const emptyCart = () => setCart([]);

  return (
    <div className="ProductsContainer">
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
