import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    POST_ORDER_SUCCESS,
} from "../actions/actions";

const totalReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return state + action.payload.price;
        case REMOVE_ITEM_FROM_CART:
            return state - action.payload.price;
        case POST_ORDER_SUCCESS:
            return 0;
        default:
            return state;
    }
}

export default totalReducer;