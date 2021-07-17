import reducer from '../reducers/index';
import middleware from '../middleware/index';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));

const ProviderWrapper = (props) => {
    return <Provider store={store}>{props.children}</Provider>
}

export default ProviderWrapper;