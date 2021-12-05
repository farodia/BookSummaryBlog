import '../App.css';
import {Link} from "react-router-dom";
import {Navigation} from "./Navigation";
import Search from "./Search";
import React from "react";


export const HeaderContainer=()=>{
    return(
        <header className="header-container">
            <div className="header">
                <Link to="/">
                    <div className="header-title">
                        <span className="header-span">🄱</span>
                        <span>🅾🅾🅺.</span>
                        <span className="header-span">🄻🄾🄶</span>
                    </div>
                </Link>
                <Navigation/>
                <Search/>
            </div>
        </header>
    )
}