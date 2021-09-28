import React, {FC} from "react";
import '../App.css';
import {useSelector} from "react-redux";
import {State} from "../state";
import {BackCard, FrontCard} from "./FrontAndBackCardContent";
interface SummaryContentProps {
    cardIndex: number;
    isFrontCard:boolean
}

const SummaryContent:FC<SummaryContentProps> = ({cardIndex=1,isFrontCard= true}) => {

    const articleInfo = useSelector((state: State) => state.articles["bookCards"]);
    const summary = articleInfo[cardIndex].summary;
    const title =  articleInfo[cardIndex].title;
    return (
        <div className="article-content">
            <article>
                <FrontCard frontCardContent={summary} visible={isFrontCard}/>
                <BackCard backCardContent={title} visible={isFrontCard}/>
            </article>
        </div>);
}

export default SummaryContent;