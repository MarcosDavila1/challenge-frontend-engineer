import React from 'react'
import { onAdd } from '../utils/cartFunctions'

function Book({book, cartItems, setCartItems}) {
  return (
    <div className='book' key={book.isbn13}>
        <img src={book.image} alt={'Book'}/>
        <div className='bookInfo'>
            <h3 className='bookTitle'>{book.title}</h3>
            <h4 className='bookPrice'>{book.price}</h4>
            <h4 className='bookIsbn'>Isbn: {book.isbn13}</h4>
        </div>
        <button 
            onClick={()=> onAdd(book, setCartItems, cartItems)} 
            className='btnAdd'
        >
            Agregar al Carrito
        </button>
    </div>
  )
}

export default Book