import React from 'react'
import { onRemove, onAdd } from '../utils/cartFunctions'

function CartItem({item, cartItems, setCartItems}) {
  return (
    <div className='itemCart' key={item.isbn13}>
        <img src={item.image} alt='Book'/>
        <div className='cartInfo'>
            <h4>{item.title}</h4>
            <h4>{item.price}</h4>
        </div>
        <div className='cartQty'>
            <button className='btn-add' onClick={()=> onRemove(item, setCartItems, cartItems)}>-</button>
            <h6>{item.qty}</h6>
            <button className='btn-rem' onClick={()=> onAdd(item, setCartItems, cartItems)}>+</button>
        </div>
    </div>
  )
}

export default CartItem