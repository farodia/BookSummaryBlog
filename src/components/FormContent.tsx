import React, {FC, useState} from "react";
import '../modal.css'
import {useDispatch,useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../state";

interface FormContentProps{
    onClose: ()=>void,
    cardId:string,
    cardIndex:number
}

export const FormContent: FC<FormContentProps> = ({onClose,cardId,cardIndex}) => {
    const dispatch = useDispatch();
    const {EditArticleContent} = bindActionCreators(actionCreators,dispatch);
    const [articleTitle,setArticleTitle] = useState("");
    const [articleSummary,setArticleSummary] = useState("");
    const handleSubmit = (event:any) => {
        event.preventDefault();
        setArticleTitle(event.target[0].value);
        setArticleSummary(event.target[1].value);
        console.log(articleTitle);
        EditArticleContent({cardIndex:cardIndex,cardInfo:{cardId:cardId,title:articleTitle,summary:articleSummary}});
        onClose();
    }
    const handleReset = () => {
        setArticleTitle("");
        setArticleSummary("");
    }

    return (
        <form id="form-content" onSubmit={(event:any) => {handleSubmit(event)}} >
            <div className="modal-body">
                <ul>
                    📚书籍名称：
                    <input className="title-content" required type="text" placeholder="请输入您将记录的书籍名称" name="title"
                    onChange={e=>setArticleTitle(e.target.value)} value={articleTitle}/>


                </ul>
                <ul className="ul-textarea">
                    📃书籍总结：
                    <textarea required placeholder="请在此记录您对于本书的总结" rows={10} cols={40} name="summary"
                              onChange={e=>setArticleSummary(e.target.value)} value={articleSummary}/>
                </ul>
            </div>
            <button className="modal-confirm-btn">提交</button>
            <button type="button" className="modal-cancel-btn" onClick={handleReset}>重置</button>
        </form>
    );
}