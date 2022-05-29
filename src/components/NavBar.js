import React from 'react'
import Logout from '../auth/Logout'
import '../styles/NavBar.css'
import Cart from './Cart'
import Slogan from './Slogan'

function NavBar({cartItems, setCartItems, show, setShow}) {
  return (
    <div className='containerNav'>
        <Slogan />       
        <Logout />
        <Cart 
          cartItems={cartItems} 
          setCartItems={setCartItems}
          show={show}
          setShow={setShow}
        />
    </div>
  )
}

export default NavBar