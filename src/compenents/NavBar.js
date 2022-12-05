import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
const item = useSelector((state)=>state.cart)

  return (
    <>
      <span className="logo"> Redux score</span>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/cart"> Cart</Link>
        <span>Cart item :{item.length}</span>
      </div>
    </>
  );
}

export default NavBar;
