import { Link } from "react-router-dom";
import React from "react";
import "./nav.css";
const Navigation = () => {
  return (
    <>
      <nav className="nav__bar">
      <div className="logo">Logo</div>
      <div>
        <ul className="nav_links">
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
        </ul>
      </div>
      </nav>
    </>
  );
};

export default Navigation;
