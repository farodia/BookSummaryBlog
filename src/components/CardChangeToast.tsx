import React, {FC, useEffect} from "react";
import HeaderPartOfModal from "./CloseIcon";
import "../modal.css";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../state";
import {bindActionCreators} from "redux";
import {OperationButton} from "./OperationButton";

interface CardChangeToastProps {
    visible:boolean,
    onCancel: ()=>void,
    cardIndex:string
}

export const CardChangeToast :FC<CardChangeToastProps> = ({visible,onCancel,cardIndex}) => {
    //TODO 选择此卡对应的ID
    const articleInfo = useSelector((state:State)=>state.articles);
    console.log(articleInfo);

    const newCardId = (new Date()).valueOf();
    console.log("newCardId",newCardId);
    const dispatch = useDispatch();
    const {AddCard,DeleteCard} = bindActionCreators(actionCreators,dispatch);
    console.log("tap toast card index is",cardIndex);

    const deleteCard = () => {
        DeleteCard(cardIndex);
        console.log("delete card",articleInfo["cardId"]);
        onCancel();
    }
    const addCard = () => {
        AddCard(String(newCardId));
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
                {/*TODO 判断逻辑有问题*/}
                <OperationButton cardId={cardIndex} onAdd={addCard} onDelete={deleteCard}/>
            </div>
        </div>
    );
}
