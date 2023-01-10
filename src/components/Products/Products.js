import React from "react";
import "./products.css";
import {useDispatch} from 'react-redux';
import { addToItem } from "../../redux/Actions/actions";

const Products = (props) => {
  const dispatch = useDispatch()
  const data = props.data;
  const btnHandler =(itemId)=>{
  let itemFiltered = data.filter((each)=>itemId === each.id)
  let time = new Date()
  let payLoad={
    id:time.getTime(),
    brand:itemFiltered[0].brand,
    price:itemFiltered[0].price,
    description:itemFiltered[0].description
  }
  console.log(payLoad)
  // console.log(itemFiltered)
  dispatch(addToItem(payLoad))
  
    
  }



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
                <button className="item__btn" onClick={()=>btnHandler(each.id)}>Add to cart</button>
              </div>
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default Products;
