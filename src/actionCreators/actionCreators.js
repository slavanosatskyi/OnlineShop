import { postOrder as postOrderAPI } from "../service/service";

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  POST_ORDER_SUCCESS,
  CLOSE_ORDER,
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
    type: CLOSE_ORDER,
  };
};

export const postOrder = (clientInfo) => {
  return (dispatch, getStore) => {
    const { cart, total } = getStore();
    postOrderAPI(cart, total, clientInfo);
    dispatch(postOrderSuccess());
  };
};
