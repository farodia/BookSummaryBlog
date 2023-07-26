import React, {FC, useState} from "react";
import '../modal.css'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";
import {useBooks} from "../hooks/useBooks";
import {changeCard} from "../hooks/changeCard";

interface FormContentProps {
    onClose: () => void,
    cardId: string,
    cardOrder: number
}

export const FormContent: FC<FormContentProps> = ({onClose, cardId, cardOrder}) => {
    const dispatch = useDispatch();
    const {editContent} = bindActionCreators(actionCreators, dispatch);
    const url = "http://localhost:8080";
    const {bookSummary, bookTitle} = useBooks(cardOrder);
    const [title, setTitle] = useState(bookTitle);
    const [summary, setSummary] = useState(bookSummary);
    const handleSubmit = () => {
        editContent({cardOrder: cardOrder, cardInfo: {cardId: cardId, title: title, summary: summary}});
        changeCard(url, {id: cardId, title: title, summary: summary}, 'PATCH');
        onClose();
    }

    const handleReset = () => {
        setTitle("");
        setSummary("");
    }

    return (
        <form id="form-content" onSubmit={() => {
            handleSubmit()
        }}>
            <div className="modal-body">
                <div>
                    <span>📚Title：</span>
                    <input className="title-content" required type="text" placeholder="Please input the book title"
                           name="title"
                           onChange={e => setTitle(e.target.value)} value={title}/>

                    <div className="form-textarea"/>

                    <div>
                        <span>📃Summary：</span>
                        <textarea required placeholder="Please input the book summary" name="summary"
                                  onChange={e => setSummary(e.target.value)} value={summary}/>
                    </div>
                </div>
            </div>
            <button className="modal-confirm-btn">Summit</button>
            <button type="button" className="modal-cancel-btn" onClick={handleReset}>Reset</button>
        </form>
    );
}