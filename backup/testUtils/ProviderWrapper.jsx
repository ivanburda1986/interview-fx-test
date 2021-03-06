import reducer from "../../src/reducers/index";
import middleware from "../../src/middleware/index";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));

const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
