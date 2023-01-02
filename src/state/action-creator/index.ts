import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Actions, ArticleContent} from "../actions";
import {SummaryCardData} from "../../data_class/SummaryCardData";


export const editContent = (articleContent: ArticleContent) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.EDIT,
                payload: articleContent
            }
        )
    }
}

export const addCards = (cardId: string) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.ADD_CARD,
                payload: cardId
            }
        )
    }
}
export const showCards = (summaryCard: Array<SummaryCardData>) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.SHOW_CARDS,
                payload: summaryCard,
            }
        )
    }
}

export const deleteCards = (cardId: string) => {
        return (dispatch:Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.DELETE_CARD,
                payload: cardId
            }
        )
    }
}