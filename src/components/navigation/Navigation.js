import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";
const Navigation = () => {
  return (
    <>
    <h1 className="logo">Ecommerce</h1>
      <nav className="nav__bar">
      <div className="navLinks__container">
        <ul className="nav__links">
          <Link to='/' className="link">Home</Link>
          <Link to='/products' className="link">Products</Link>
          <Link to='/cart' className="link">Cart</Link>
        </ul>
      </div>
      </nav>
    </>
  );
};

export default Navigation;
