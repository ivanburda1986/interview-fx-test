import {render, screen} from '@testing-library/react';
import ProviderWrapper from '../../testUtils/ProviderWrapper';
import Header from './Header';

test ("page header is displayed upon load", ()=>{
    render(<ProviderWrapper><Header/></ProviderWrapper>)
    //Find an element with the text George FX
    const header = screen.getByText(/George FX/i);
    expect (header).toBeInTheDocument();
});

test("page header scrolls away", ()=>{
    //Find an element with the text George FX

    //Scroll down to a certain position

    //Make sure the header has scrolled out of the screen
});