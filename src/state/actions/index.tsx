import {ActionTypes} from "../action-types";

interface ArticleContent {
    cardId:Number,
    title:String,
    summary:String
}

interface CardNumber {
    cardId:Number,
}

interface EditAction {
    type: ActionTypes.EDIT,
    payload: ArticleContent
}

interface AddAction {
    type: ActionTypes.ADD_CARD,
    payload: CardNumber
}

interface DeleteAction {
    type: ActionTypes.DELETE_CARD,
    payload: CardNumber
}

export type Actions = EditAction|AddAction|DeleteAction;