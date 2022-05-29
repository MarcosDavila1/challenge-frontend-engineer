import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Loading from './Loading'
import Books from './Books';
import landingBooks from '../utils/firsBooks';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory()
    const { isAuthenticated, isLoading} = useAuth0();
    const [books, setBooks] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=> (
        landingBooks()
        .then(res => setBooks(res))
    ),[])    

    if(isLoading){
        return (
            <>
                <NavBar 
                    show={show}
                    setShow={setShow}
                />
                <Loading />
            </>
        )
    }

    return (
        isAuthenticated ? 
            <div>
                <NavBar 
                    show={show}
                    setShow={setShow}
                    cartItems={cartItems} 
                    setCartItems={setCartItems}
                />

                {books.length 
                    ? <Books  
                        cartItems={cartItems}
                        setCartItems={setCartItems} 
                        books={books}
                        show={show}
                        setShow={setShow}
                        /> 
                    : <Loading />
                }
            </div>
        : 
            <div>
                {history.push('/')}
            </div>
  )
}

export default Home 