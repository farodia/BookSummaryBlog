import {ActionTypes} from "../action-types";
import {Actions} from "../actions";

const initialState = {};

const articleReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.EDIT:
            return action.payload;
        case ActionTypes.ADD_CARD:
            return +action.payload + 1;
        case ActionTypes.DELETE_CARD:
            return +action.payload - 1;
        default:
            return state;
    }
}
export default articleReducer;