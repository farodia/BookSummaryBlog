import React from "react";
import '../App.css';

const SummaryContent = () => {
    const summary = "这里是总结内容"
    return (
        <div className="article-content">
        <article>
            <h2 className="article-title">SUMMARY</h2>
            <p className="summary-content">{summary}</p>
        </article>
    </div>);
}

export default SummaryContent;