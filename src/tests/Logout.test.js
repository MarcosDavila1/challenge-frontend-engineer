import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import Logout from '../auth/Logout'

describe('<Logout />', ()=> {
    test('It must be render button Logout', ()=> {
        const component = render(<Logout />)
        expect(component.container).toHaveTextContent('Logout')
    })
})