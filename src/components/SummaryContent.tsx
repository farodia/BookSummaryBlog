import React, {FC} from "react";
import '../App.css';
import {Back, Front} from "./FrontAndBackCardContent";
import {useBooks} from "../hooks/useBooks";
interface SummaryContentProps {
    cardOrder: number;
    isFrontCard:boolean
}

const SummaryContent:FC<SummaryContentProps> = ({cardOrder=1,isFrontCard= true}) => {
    const {summary,title} = useBooks(cardOrder);
    return (
        <div className="article-content">
                <Front frontCardContent={summary} visible={isFrontCard}/>
                <Back backCardContent={title} visible={isFrontCard}/>
        </div>);
}

export default SummaryContent;