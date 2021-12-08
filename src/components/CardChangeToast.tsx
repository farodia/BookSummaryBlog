import React, {FC} from "react";
import HeaderPartOfModal from "./CloseIcon";
import "../modal.css";
import {useDispatch} from "react-redux";
import {actionCreators} from "../state";
import {bindActionCreators} from "redux";
import {OperationButton} from "./OperationButton";
import {PostSummary} from "../hooks/useFetch";
interface CardChangeToastProps {
    visible:boolean,
    onCancel: ()=>void,
    cardOrder:string
}

export const CardChangeToast :FC<CardChangeToastProps> = ({visible,onCancel,cardOrder}) => {
    const newCardId = (new Date()).valueOf();
    const url = "http://localhost:8080";
    const dispatch = useDispatch();
    const {addCards,deleteCards} = bindActionCreators(actionCreators,dispatch);

    const deleteCard = () => {
        deleteCards(cardOrder);
        onCancel();
    }
    //TODO initialize a new card
    function addCard() {
        addCards(String(newCardId));
        PostSummary(url,{id:String(newCardId),title:"",summary:""});
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
                <OperationButton cardId={cardOrder} onAdd={addCard} onDelete={deleteCard}/>
            </div>
        </div>
    );
}
