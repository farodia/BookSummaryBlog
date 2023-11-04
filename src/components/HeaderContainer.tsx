import '../App.css';
import {Link} from "react-router-dom";
import {Navigation} from "./Navigation";
import Search from "./Search";
import React from "react";


export const HeaderContainer=()=>{
    return(
        <header className="header-container">
                <Link to="/">
                    <div className="header-title">
                       🄱🄻🄾🄶
                    </div>
                </Link>
                <Navigation/>
                <Search/>
        </header>
    )
}