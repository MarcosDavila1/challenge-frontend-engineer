import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import Books from '../components/Books';

describe('<Books />', ()=> {

    const books = [
        {
            "title": "Mastering Reverse Engineering",
            "subtitle": "Re-engineer your ethical hacking skills",
            "isbn13": "9781788838849",
            "price": "$44.99",
            "image": "https://itbook.store/img/books/9781788838849.png",
            "url": "https://itbook.store/books/9781788838849"        
        }    
    ]

    const mockHandler = jest.fn();
    const component = render(<Books books={books} setShow={mockHandler}/>);

    test('Click event on container calls event handler once', ()=> {        
        const cart = component.getByTestId('div-books')
        fireEvent.click(cart)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    });
})