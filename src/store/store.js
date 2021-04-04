import { createStore } from 'redux'

import cartReducer from "../reducers/cartReducer";

const preloadedState = {
    cart: {},
    total: 0
}

const store = createStore(cartReducer, preloadedState);

export default store;