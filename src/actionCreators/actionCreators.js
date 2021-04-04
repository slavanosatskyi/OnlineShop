import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from "../actions/actions";

export const addItemToCart = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: item
    };
} 

export const removeItemFromCart = (itemId) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: itemId
    }
}