import React, {FC} from "react";
import HeaderPartOfModal from "./CloseIcon";
import "../modal.css";

interface CardChangeToastProps {
    visible:boolean,
    onCancel: ()=>void
}

export const CardChangeToast :FC<CardChangeToastProps> = ({visible,onCancel}) => {
    if (!visible) {
        return null;
    }
    return (
        <div>

            <div className="modal-mask"/>
            <div className="modal-container">
                <HeaderPartOfModal onClose={onCancel}/>
                <div className="card-change-toast">
                    <button className="modal-confirm-btn">新增卡片</button>
                    <button className="modal-cancel-btn">删除此卡</button>
                </div>

            </div>
        </div>
    );
}
