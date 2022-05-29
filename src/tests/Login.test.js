import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Login from '../auth/Login'

describe('<Login />', ()=> {
    test('It must be render button login', ()=> {
        const component = render(<Login />)
        expect(component.container).toHaveTextContent('Login')
    })
})