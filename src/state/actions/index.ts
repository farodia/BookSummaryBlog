import {ActionTypes} from "../action-types";
import {SummaryCardData} from "../../data_class/SummaryCardData";

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

interface ShowAction {
    type: ActionTypes.SHOW_CARDS,
    payload: Array<SummaryCardData>
}

export type Actions = EditAction | AddAction | DeleteAction | ShowAction;