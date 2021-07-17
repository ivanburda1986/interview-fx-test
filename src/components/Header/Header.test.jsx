import {render, screen} from '@testing-library/react';
import reducer from '../../reducers/index';
import middleware from '../../middleware';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';

import App from '../../App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));

test ("page header is displayed upon load", ()=>{
    render(<Provider store={store}><App/></Provider>)
    //Find an element with the text George FX
    const header = screen.getByText(/George FX/i);
    expect (header).toBeInTheDocument();
});

test("page header scrolls away", ()=>{
    //Find an element with the text George FX

    //Scroll down to a certain position

    //Make sure the header has scrolled out of the screen
});