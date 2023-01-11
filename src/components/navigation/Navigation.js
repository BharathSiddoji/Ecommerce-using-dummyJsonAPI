import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";
import { useSelector } from "react-redux";

const Navigation = () => {
  const itemsInCart = useSelector((state)=>state.cartReducer)
  return (
    <div className="nav__header">
    <h1 className="logo">Ecommerce</h1>
      <nav className="nav__bar">
      <div className="navLinks__container">
        <ul className="nav__links">
          <Link to='/' className="link">Home</Link>
          <Link to='/products' className="link">Products</Link>
          <Link to='/cart' className="link cart">Cart<span className="cartItems">{itemsInCart.length}</span></Link>
        </ul>
      </div>
      </nav>
    </div>
  );
};

export default Navigation;
