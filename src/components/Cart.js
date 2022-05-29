import React from 'react'
import '../styles/Cart.css'
import cart from '../images/cart.svg'
import CartItem from './CartItem'

function Cart({cartItems, setCartItems, show, setShow}) {    

  return (
    <div className='containerCart'>
        <img onClick={()=> setShow(value => !value)} src={cart} alt='Shop Cart'/>
        {show && 
            <div className='containerFloatCart'>
                <h3>Items</h3>
                {cartItems?.length 
                    ? cartItems?.map(el => (
                        <CartItem 
                            key={el.isbn13}
                            item={el}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    ))
                    : <div>
                        <h4>Su carrito esta vacío</h4>
                      </div>
                }
            </div>
        }
    </div>
  )
}

export default Cart