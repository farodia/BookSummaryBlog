import React, {FC} from "react";
import '../App.css';
import {useSelector} from "react-redux";
import {State} from "../state";
interface SummaryContentProps {
    cardIndex: number;
}

const SummaryContent:FC<SummaryContentProps> = ({cardIndex=1}) => {

    const articleInfo = useSelector((state: State) => state.articles["bookCards"]);
    console.log("articleInfo",articleInfo);
    const summary = articleInfo[cardIndex].summary;
    console.log("summary is",summary);
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