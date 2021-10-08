import React, {FC} from "react";
import HeaderPartOfModal from "./CloseIcon";
import "../modal.css";
import {useDispatch} from "react-redux";
import {actionCreators} from "../state";
import {bindActionCreators} from "redux";
import {OperationButton} from "./OperationButton";

interface CardChangeToastProps {
    visible:boolean,
    onCancel: ()=>void,
    cardOrder:string
}

export const CardChangeToast :FC<CardChangeToastProps> = ({visible,onCancel,cardOrder}) => {
    const newCardId = (new Date()).valueOf();
    const dispatch = useDispatch();
    const {addCards,deleteCards} = bindActionCreators(actionCreators,dispatch);

    const deleteCard = () => {
        deleteCards(cardOrder);
        onCancel();
    }
    const addCard = () => {
        addCards(String(newCardId));
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
