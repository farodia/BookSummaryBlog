import React, {ChangeEvent, EventHandler, FC, useEffect, useState} from "react";
import '../modal.css'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../state";

interface FormContentProps{
    onClose: ()=>void,
    cardId:string,
    cardOrder:number
}

export const FormContent: FC<FormContentProps> = ({onClose,cardId,cardOrder}) => {
    const dispatch = useDispatch();
    const {editArticleContent} = bindActionCreators(actionCreators,dispatch);
    const articleInfo = useSelector((state:State)=>state.articles["bookCards"]);
    const articleTitleInForm = articleInfo[cardOrder].title === "这里是书籍标题"?"":articleInfo[cardOrder].title;
    const articleSummaryInForm = articleInfo[cardOrder].summary=== "这里是你的总结"?"":articleInfo[cardOrder].summary;
    const [articleTitle,setArticleTitle] = useState(articleTitleInForm);
    const [articleSummary,setArticleSummary] = useState(articleSummaryInForm);
    console.log("change in",articleTitle)
    const handleSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        //为什么会得到不一样的值
        console.log(articleTitle);
        console.log(articleSummary);
        editArticleContent({cardOrder:cardOrder,cardInfo:{cardId:cardId,title:articleTitle,summary:articleSummary}});
        onClose();
    }

    //关闭以后才会清空；点击不会清空
    const handleReset = () => {
        setArticleTitle("");
        console.log("after handle reset",articleTitle);
        setArticleSummary("");
    }

    return (
        <form id="form-content" onSubmit={(event:any) => {handleSubmit(event)}} >
            <div className="modal-body">
                <div>
                    <label>📚书籍名称：</label>
                    <input className="title-content" required type="text" placeholder="请输入您将记录的书籍名称" name="title"
                    onChange={e=>setArticleTitle(e.target.value)} value={articleTitle}/>

                </div>
                <div className="form-textarea">
                    <label>📃书籍总结：</label>
                    <textarea required placeholder="请在此记录您对于本书的总结" rows={10} cols={40} name="summary"
                              onChange={e=>setArticleSummary(e.target.value)} value={articleSummary}/>
                </div>
            </div>
            <button className="modal-confirm-btn">提交</button>
            <button type="button" className="modal-cancel-btn" onClick={handleReset}>重置</button>
        </form>
    );
}