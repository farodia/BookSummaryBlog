import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Actions} from "../actions";

interface ArticleContent {
    cardId:Number,
    title:String,
    summary:String
}


export const EditArticleContent = (articleContent: ArticleContent) => {
    return (dispatch:Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.EDIT,
            payload:articleContent
            }
        )
    }
}

export const AddCard = (articleContent: ArticleContent) => {
    return (dispatch:Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.ADD_CARD,
            payload:articleContent
            }
        )
    }
}

export const DeleteCard = (articleContent: ArticleContent) => {
    return (dispatch:Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.DELETE_CARD,
            payload:articleContent
            }
        )
    }
}