import {ActionTypes} from "../action-types";
import {Actions} from "../actions";
import {Reducer} from "react";

const initialState = {
    bookCards:[{cardId: "1", title: "这里是书籍标题", summary:"这里是你的总结"}]
};

const articleReducer:Reducer<any, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.EDIT:{
            state.bookCards.splice(action.payload.cardIndex, 1, action.payload.cardInfo);
            return state;
        }
            // 返回值的问题
            // return {bookCards:[...state.bookCards,action.payload.cardInfo]};
        case ActionTypes.ADD_CARD:
            return {bookCards:[...state.bookCards,{cardId: action.payload,title: "这里是书籍标题", summary:"这里是你的总结"}]};
        case ActionTypes.DELETE_CARD:
            return {bookCards: state.bookCards.filter((card:any)=>card.cardId!==action.payload)};
        default:
            return state;
    }
}
export default articleReducer;