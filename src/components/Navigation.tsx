import '../App.css';
import React from "react";
const NavigationComponent=()=>{
    return (
        <nav className="main-nav">
            <ul>
                <li><a>HOME</a></li>
                <li><a>BOOKSHELF</a></li>
                <li><a>ABOUT</a></li>
            </ul>
        </nav>
    );
}
export default NavigationComponent;