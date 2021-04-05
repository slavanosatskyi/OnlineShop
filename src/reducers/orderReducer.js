import {IDLE, SUCCEED} from "../common/orderState";
import {POST_ORDER_SUCCESS, CLOSE_ORDER} from "../actions/actions";

const orderReducer = (state = IDLE, action) => {
    switch(action.type) {
        case POST_ORDER_SUCCESS:
            return SUCCEED;
        case CLOSE_ORDER:
            return IDLE;
        default: return state;
    }
}

export default orderReducer;