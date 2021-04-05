import firebase from "../config/firebase"

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  POST_ORDER_SUCCESS,
  CLOSE_ORDER
} from "../actions/actions";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const postOrderSuccess = () => {
  return {
    type: POST_ORDER_SUCCESS,
  };
};

export const closeOrder = () => {
    return {
        type: CLOSE_ORDER
    }
}

export const postOrder = (clientInfo) => {
  return (dispatch, getStore) => {
      const rootRef = firebase.database().ref("/order");
      const {cart, total} = getStore();
      const order = {
          items: Object.keys(cart),
          clientInfo,
          price: total,
      }
      rootRef.set(order);
      dispatch(postOrderSuccess());
  };
};
