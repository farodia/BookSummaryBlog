import {ActionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Actions} from "../actions";

interface ArticleContent {
    cardId:Number,
    title:String,
    summary:String
}

interface CardNumber {
    cardId:Number
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

export const AddCard = (cardNumber:CardNumber) => {
    return (dispatch:Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.ADD_CARD,
            payload:cardNumber
            }
        )
    }
}

export const DeleteCard = (cardNumber:CardNumber) => {
    return (dispatch:Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.DELETE_CARD,
            payload:cardNumber
            }
        )
    }
}