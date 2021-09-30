import React, {FC} from "react";
import '../App.css';
import RightArrow from "../_svg/RightArrow";
import LeftArrow from "../_svg/LeftArrow";

interface TitleNavigatorProps {
    isRightArrow:boolean,
    showRightArrow:()=>void

}
const TitleNavigator:FC<TitleNavigatorProps> = ({isRightArrow=true,showRightArrow}) => {

    return (
        <div className="title-navigator">
            <div className="svg-title" onClick={showRightArrow}>
                <RightArrow visible={isRightArrow}/>
                <LeftArrow visible={isRightArrow}/>
            </div>
        </div>
    );
}
export default TitleNavigator;