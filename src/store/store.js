import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import localStorageWriter from "../middleware/localStorageWriter";
import cartReducer from "../reducers/cartReducer";
import totalReducer from "../reducers/totalReducer";
import orderReducer from "../reducers/orderReducer";

const preloadedState = localStorage.order ? JSON.parse( localStorage.order ) : {total: 0, cart: {}};

const store = createStore(
  combineReducers({
    total: totalReducer,
    cart: cartReducer,
    order: orderReducer,
    form: formReducer,
  }),
  preloadedState,
  applyMiddleware(thunk, localStorageWriter)
);

export default store;
