import React, {FC} from "react";
import '../App.css';
import {useSelector} from "react-redux";
import {State} from "../state";
import {BackCard, FrontCard} from "./FrontAndBackCardContent";
interface SummaryContentProps {
    cardOrder: number;
    isFrontCard:boolean
}

const SummaryContent:FC<SummaryContentProps> = ({cardOrder=1,isFrontCard= true}) => {

    const articleInfo = useSelector((state: State) => state.articles["bookCards"]);
    const summary = articleInfo[cardOrder].summary===""?"这里是书籍标题":articleInfo[cardOrder].summary;
    const title =  articleInfo[cardOrder].title===""?"这里是你的总结":articleInfo[cardOrder].title;
    return (
        <div className="article-content">
            <article>
                <FrontCard frontCardContent={summary} visible={isFrontCard}/>
                <BackCard backCardContent={title} visible={isFrontCard}/>
            </article>
        </div>);
}

export default SummaryContent;