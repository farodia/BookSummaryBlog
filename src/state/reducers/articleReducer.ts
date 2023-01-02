import {ActionTypes} from "../action-types";
import {Actions} from "../actions";
import {Reducer} from "react";

const initialState = {
    bookCards: [{cardId: "1", title: "", summary: ""}]
};

export interface CardInfo {
    cardId: string,
    title: string,
    summary: string
}

//TODO any Type
export const articleReducer: Reducer<any, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.EDIT: {
            state.bookCards.splice(action.payload.cardOrder, 1, action.payload.cardInfo);
            return state;
        }
        case ActionTypes.ADD_CARD:
            return {bookCards: [...state.bookCards, {cardId: action.payload, title: "", summary: ""}]};
        case ActionTypes.SHOW_CARDS:
            return {bookCards: [...state.bookCards, action.payload]};
        case ActionTypes.DELETE_CARD:
            return {bookCards: state.bookCards.filter((card: CardInfo) => card.cardId !== action.payload)};
        default:
            return state;
    }
}