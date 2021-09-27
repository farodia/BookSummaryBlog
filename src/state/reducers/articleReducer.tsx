import {ActionTypes} from "../action-types";
import {Actions} from "../actions";

const initialState = {
    bookCards:[{cardId: "1", title: "这里是书籍标题", summary:"这里是你的总结"}]
};

const articleReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.EDIT:
            return action.payload;
        case ActionTypes.ADD_CARD:
            return {bookCards: state.bookCards.push({cardId: action.payload,title: "这里是书籍标题", summary:"这里是你的总结"})};
        case ActionTypes.DELETE_CARD:
            return {bookCards: state.bookCards.filter((card)=>card.cardId!==action.payload)};
        default:
            return state;
    }
}
export default articleReducer;