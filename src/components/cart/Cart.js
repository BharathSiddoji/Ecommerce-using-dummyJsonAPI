import React from 'react'
import './cart.css';
import {useSelector,useDispatch} from 'react-redux';
import { removeItem } from '../../redux/Actions/actions';

const Cart = () => {
  const data = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()  
  const removeItemHandler =(itemId)=>{
    const removedItemList = data.filter((each)=> itemId !== each.id)
    console.log(removedItemList)
    dispatch(removeItem(removedItemList))
  }
  let total = 0
  const totalValue = data.forEach(each => total += each.price)

  const items = data.map((each)=> 
    <div className='Item__card' key={each.id} >
    <img src={each.image} alt="product_image" />
    <div className='text__container'>
    <p className='cart_itemTitle'>{each.title}</p>
    <p className="cart_itemPrice">${each.price}</p>
    </div>
    <button className='remove_Item' onClick={()=>removeItemHandler(each.id)}>X</button>
   
  </div>
   
  )
  
  return (
   
    <>
     <div className='cart__container'>
     <div className="total__value cart__empty">
      <h4>Total Cart value : ${total}</h4>
     </div>
      {items.length <= 0 ? <h1 className='cart__empty'>your Cart is  Empty</h1>: items}
     
     </div>
    </>
  )
}

export default Cart