import React from "react";

function NavBar({ username }) {
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">Hello, {username}!</div>
      <div className="NavDiv NavTitle">
        <h1>Grocery Shopping App</h1>
      </div>
      <div className="NavDiv NavCart">
        🛒
        <span className="cart-notification-dot"></span>
      </div>
    </nav>
  );
}

export default NavBar;
