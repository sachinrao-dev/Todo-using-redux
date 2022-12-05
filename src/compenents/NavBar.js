import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <span className="logo"> Redux score</span>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/cart"> Cart</Link>
        <span>Cart item :0</span>
      </div>
    </>
  );
}

export default NavBar;
