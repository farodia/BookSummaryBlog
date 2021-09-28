import React, {FC} from "react";
import '../App.css';
interface FrontCardContentProps {
    frontCardContent: string,
    visible:boolean
}

interface BackCardContentProps {
    backCardContent: string,
    visible:boolean
}

export const FrontCard: FC<FrontCardContentProps> = ({frontCardContent,visible=true}) => {
    const frontCardTitle = "Summary";
    if (!visible){
        return null;
    }
    return (
        <div>
            <h2 className="article-title">{frontCardTitle}</h2>
            <div className="summary-box">
                <p className="summary-content">{frontCardContent}</p>
            </div>
        </div>
    );
}

export const BackCard: FC<BackCardContentProps> = ({backCardContent,visible=false}) => {
    const backCardTitle = "Title";
    if (visible) {
        return null;
    }
    return(
        <div>
            <h2 className="article-title">{backCardTitle}</h2>
            <div className="summary-box">
                <p className="summary-content">{backCardContent}</p>
            </div>
        </div>
    );
}