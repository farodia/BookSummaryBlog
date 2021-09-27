import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Actions, ArticleContent} from "../actions";


export const EditArticleContent = (articleContent: ArticleContent) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.EDIT,
                payload: articleContent
            }
        )
    }
}

export const AddCard = (cardId: string) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.ADD_CARD,
                payload: cardId
            }
        )
    }
}

export const DeleteCard = (cardId: string) => {
        // TODO 为什么会报错
        return (dispatch:Dispatch<Actions>) => {
        dispatch({
                type: ActionTypes.DELETE_CARD,
                payload: cardId
            }
        )
    }
}