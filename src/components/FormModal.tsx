import '../modal.css'
import React, {FC, ReactChildren} from "react";
import HeaderPartOfModal from "./CloseIcon";

interface FormModalProps {
    children: React.ReactChild | React.ReactChildren | React.ReactElement<any>[],
    visible: boolean,
    title?: React.ReactChild,
    onOk?: () => void,
    onCancel?: () => void,
    okText?: String,
    cancelText?: String,
}


export const FormModal: FC<FormModalProps> = ({
                                                  children,
                                                  visible = false,
                                                  onCancel,
                                                  onOk,
                                                  okText = "确定",
                                                  cancelText = "取消"
                                              }) => {
    if (!visible) {
        return null;
    }
    return (
        <div>
            <div className="modal-mask"/>
            <div className="modal-container">
                <HeaderPartOfModal onClose={onCancel}/>
                <div>
                    {children}
                </div>
                {/*<div className="modal-footer">*/}
                {/*    <button className="modal-cancel-btn btn" onClick={onCancel}>{cancelText}</button>*/}
                {/*    <button className="modal-confirm-btn btn" onClick={onOk}>{okText}</button>*/}
                {/*</div>*/}
            </div>
        </div>)
}