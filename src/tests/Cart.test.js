import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import Cart from '../components/Cart';

describe('<Cart />', ()=> {

    const books = [
        {
            "title": "Practical MongoDB",
            "subtitle": "Architecting, Developing, and Administering MongoDB",
            "isbn13": "9781484206485",
            "price": "$32.04",
            "image": "https://itbook.store/img/books/9781484206485.png",
            "url": "https://itbook.store/books/9781484206485"
        }
    ]

    const mockHandler = jest.fn();
    const component = render(<Cart cartItems={books} setCartItems={mockHandler} show={true} setShow={mockHandler}/>);

    test('Click event on cart image calls event handler once', ()=> {        
        const cart = component.getByAltText('Shop Cart')
        fireEvent.click(cart)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    });

    test('It should render (Su carrito esta vacío) if there are no items', ()=> { 
        const compo = render(<Cart cartItems={[]} setCartItems={mockHandler} show={true} setShow={mockHandler}/>);
        expect(compo.container).toHaveTextContent('Su carrito esta vacío')
    });
})