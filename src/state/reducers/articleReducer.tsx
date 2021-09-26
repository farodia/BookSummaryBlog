import {ActionTypes} from "../action-types";
import {Actions} from "../actions";

const initialState = {
    cardId: 1,
    title: "这里是书籍标题",
    summary:"这里是你的总结"
};

const articleReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.EDIT:
            return action.payload;
        case ActionTypes.ADD_CARD:
            return { ...state, cardId:+ action.payload.cardId + 1};
        case ActionTypes.DELETE_CARD:
            return +action.payload.cardId - 1;
        default:
            return state;
    }
}
export default articleReducer;