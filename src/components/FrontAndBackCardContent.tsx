import React, {FC} from "react";
import '../App.css';
interface FrontContentProps {
    frontCardContent: string,
    visible:boolean
}

interface BackContentProps {
    backCardContent: string,
    visible:boolean
}

export const Front: FC<FrontContentProps> = ({frontCardContent,visible=true}) => {
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

export const Back: FC<BackContentProps> = ({backCardContent,visible=false}) => {
    const backCardTitle = "Title";
    if (visible) {
        return null;
    }
    return(
        <div>
            <h2 className="article-title">{backCardTitle}</h2>
            <div className="summary-box">
                <h2 className="summary-title">《{backCardContent}》</h2>
            </div>
        </div>
    );
}