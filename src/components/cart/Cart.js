import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
const Cart = () => {
  const data = useSelector((state)=>state.cartReducer)
  console.log(data)
  return (
    <div>cart</div>
  )
}

export default Cart