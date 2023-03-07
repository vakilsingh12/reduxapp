import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  localStorage.setItem("cart", item.length);
  let cartCount = localStorage.getItem("cart");
  return (
    <div className="main">
      <div className="main_div">
        <span className="logo">REDUX STORE</span>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to={"/cart"}>
          Cart
        </Link>
        <span className="cartCount">Cart Items : {cartCount}</span>
      </div>
    </div>
  );
};

export default Navbar;
