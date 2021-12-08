import React, {FC} from "react";
import HeaderPartOfModal from "./CloseIcon";
import "../modal.css";
import {useDispatch} from "react-redux";
import {actionCreators} from "../state";
import {bindActionCreators} from "redux";
import {OperationButton} from "./OperationButton";
import {changeCard} from "../hooks/changeCard";
import {deleteCard} from "../hooks/deleteCard";
interface CardChangeToastProps {
    visible:boolean,
    onCancel: ()=>void,
    cardId:string
}

export const CardChangeToast :FC<CardChangeToastProps> = ({visible,onCancel,cardId}) => {
    const newCardId = (new Date()).valueOf();
    const url = "http://localhost:8080/";
    const dispatch = useDispatch();
    const {addCards,deleteCards} = bindActionCreators(actionCreators,dispatch);

    const initialCardData = {id:String(newCardId),title:"",summary:""};
    const removeCard = () => {
        deleteCards(cardId);
        deleteCard(url+`${cardId}`,cardId);
        onCancel();
    }

    function addCard() {
        addCards(String(newCardId));
        changeCard(url,initialCardData,'POST');
        onCancel();
    }

    if (!visible) {
        return null;
    }


    return (
        <div>
            <div className="modal-mask"/>
            <div className="modal-container">
                <HeaderPartOfModal onClose={onCancel}/>
                <OperationButton cardId={cardId} onAdd={addCard} onDelete={removeCard}/>
            </div>
        </div>
    );
}
