import React from "react";

function NavBar({ username }) {
  return (
    <nav className="navbar">
      <h1>Grocery Shopping App</h1>
      <div className="username">Hello, {username}!</div>
      <div className="cart-icon">🛒</div>
    </nav>
  );
}

export default NavBar;
