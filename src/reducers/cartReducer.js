import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  POST_ORDER,
} from "../actions/actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const newItem = action.payload;
      const newCart = addItem(state.cart, newItem);
      return {
        ...state,
        cart: newCart,
        total: state.total + newItem.price,
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      const itemId = action.payload;
      const newCart = removeItem(state.cart, itemId);
      return {
        ...state,
        cart: newCart,
        total: state.total - state.cart[itemId].price,
      };
    }
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

const removeItem = (cart, itemId) => {
  const newCart = copyCart(cart);
  newCart[itemId].count--;

  if (newCart[itemId].count === 0) {
    delete newCart[itemId];
  }

  return newCart;
};

export default cartReducer;
