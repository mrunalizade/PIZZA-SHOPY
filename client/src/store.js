import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { compose } from "redux";
import store from "./store";

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
});
const initialState = {};
const middleware = [thunk];

if (nodeEnv => 'production') {
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
 } else{
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      );
    
}
export default store;
