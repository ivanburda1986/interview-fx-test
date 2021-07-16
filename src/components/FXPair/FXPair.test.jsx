import {render, screen} from '@testing-library/react';
import App from '../../App';
import FXPair from './FXPair';

test("A currency pair shows the related country flag", async()=>{
    const currencyCode = "CZK"
    render(<FXPair currency={currencyCode}/>);
    const flag = await screen.findByAltText(/^[A-Z]{3}-flag$/);
    expect(flag).toBeInTheDocument();
});

test("A currency pair shows the text 1 USD", ()=>{

});

test("A currency pair shows how much of the specific currency equals to 1 USD", ()=>{

});
