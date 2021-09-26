import {ActionTypes} from "../action-types";

interface ArticleContent {
    cardId:Number,
    title:String,
    summary:String
}

interface EditAction {
    type: ActionTypes.EDIT,
    payload: ArticleContent
}

interface AddAction {
    type: ActionTypes.ADD_CARD,
    payload: ArticleContent
}

interface DeleteAction {
    type: ActionTypes.DELETE_CARD,
    payload: ArticleContent
}

export type Actions = EditAction|AddAction|DeleteAction;