import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  POST_ORDER_SUCCESS,
} from "../actions/actions";

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const newItem = action.payload;
      const newCart = addItem(state, newItem);
      return newCart;
    }
    case REMOVE_ITEM_FROM_CART: {
      const removedItem = action.payload;
      const newCart = removeItem(state, removedItem);
      return newCart;
    }
    case POST_ORDER_SUCCESS:
      return {};
    default:
      return state;
  }
};

const copyCart = (oldCart) => {
  const newCart = {};
  for (const itemId of Object.keys(oldCart)) {
    newCart[itemId] = { ...oldCart[itemId] };
  }

  return newCart;
};

const addItem = (cart, newItem) => {
  const newCart = copyCart(cart);

  if (newCart[newItem.id]) {
    newCart[newItem.id].count++;
  } else {
    newCart[newItem.id] = {
      ...newItem,
      count: 1,
    };
  }

  return newCart;
};

const removeItem = (cart, {id}) => {
  const newCart = copyCart(cart);
  newCart[id].count--;

  if (newCart[id].count === 0) {
    delete newCart[id];
  }

  return newCart;
};

export default cartReducer;
