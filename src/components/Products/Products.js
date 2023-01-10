import React from "react";
import "./products.css";

const Products = (props) => {
  const data = props.data;
  return (
    <>
      <div className="product__container">
        {data.length < 1 ? (
          <li>Loading...</li>
        ) : (
          data.map((each) => (
            <li key={each.id}>
              <div className="item__card">
                <div className="image">
                  <img
                    src={each.images[0]}
                    alt="product_images"
                    width={"200px"}
                    height={"200px"}
                  />
                </div>
                <div className="item__title">{each.title}</div>
                <div className="item__price">${each.price}</div>
                <button className="item__btn">Add to cart</button>
              </div>
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
