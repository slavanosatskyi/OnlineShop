import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import cartReducer from "../reducers/cartReducer";
import totalReducer from "../reducers/totalReducer";

const preloadedState = {
  cart: {},
  total: 0,
};

const store = createStore(
  combineReducers({
    total: totalReducer,
    cart: cartReducer,
    form: formReducer,
  }),
  preloadedState
);

export default store;
