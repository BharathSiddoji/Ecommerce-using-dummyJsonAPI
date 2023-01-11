import React from "react";
import './home.css'
import shopping from '../images/shopping.svg';
const Home = () => {
  return (
    <div className="home">
      <div className="hero__container">
        <div className="text__box section">
          <h1 className="Title__text">Buy EveryThing You Need</h1>
          <p className="subtitle">Checkout Latest Products</p>
        </div>
        <div className="image_container section">
          <img src={shopping} alt="shopping image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
