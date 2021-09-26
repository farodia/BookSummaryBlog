import React from "react";
import '../App.css';
import { useSelector} from "react-redux";
import {State} from "../state";

const SummaryContent = () => {

    const articleInfo = useSelector((state:State)=>state.articles);
    const summary = articleInfo["summary"];
    return (
        <div className="article-content">
        <article>
            <h2 className="article-title">SUMMARY</h2>
            <div className="summary-box">
                <p className="summary-content">{summary}</p>
            </div>
        </article>
    </div>);
}

export default SummaryContent;