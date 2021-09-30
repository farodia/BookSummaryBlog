import {ActionTypes} from "../action-types";

export interface ArticleContent {
    cardOrder: number,
    cardInfo: {
        cardId: string,
        title: string,
        summary: string
    }
}

interface EditAction {
    type: ActionTypes.EDIT,
    payload: ArticleContent
}

interface AddAction {
    type: ActionTypes.ADD_CARD,
    payload: string
}

interface DeleteAction {
    type: ActionTypes.DELETE_CARD,
    payload: string
}

export type Actions = EditAction | AddAction | DeleteAction;