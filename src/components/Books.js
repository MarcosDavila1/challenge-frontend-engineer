import React from 'react'
import '../styles/Books.css'
import Book from './Book'

function Books({cartItems, setCartItems, books, setShow}) {
  
  return (
    <div onClick={()=> setShow(value => value && false)} className='containerBooks' data-testid='div-books'>
        {books.length && books?.map(el => (
            <Book 
              key={el.isbn13} 
              book={el}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
        ))}
    </div>
  )
}

export default Books