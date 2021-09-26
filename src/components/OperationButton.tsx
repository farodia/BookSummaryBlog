import React, {FC} from "react";
import "../modal.css";
interface OperationButtonProps {
    cardId:number,
    onAdd:()=>void,
    onDelete:()=>void,
}

export const OperationButton:FC<OperationButtonProps> = ({cardId,onAdd,onDelete}) => {
    if (cardId>1){
        return  (<div className="card-change-toast">
            <button className="modal-confirm-btn" onClick={onAdd}>新增卡片</button>
            <button className="modal-cancel-btn" onClick={onDelete}>删除此卡</button>
        </div>)
    }
    return (<button className="modal-confirm-center-btn" onClick={onAdd}>新增卡片</button>);
}