import React, {FC} from "react";
import "../modal.css";

interface OperationButtonProps {
    cardId: string,
    onAdd: () => void,
    onDelete: () => void,
}

export const OperationButton: FC<OperationButtonProps> = ({cardId, onAdd, onDelete}) => {
    console.log("OperationButton card id",cardId);
    if (cardId === '1') {
        return (<button className="modal-confirm-center-btn" onClick={onAdd}>Add Card</button>);
    }
    return (
        <div className="card-change-toast">
            <button className="modal-confirm-btn" onClick={onAdd}>Add Card</button>
            <button className="modal-cancel-btn" onClick={onDelete} >Delete Card</button>
        </div>
    )
}