import '../App.css';
import React from "react";
import {Link, NavLink} from 'react-router-dom';

export const Navigation=()=>{
    return (
            <nav className="main-nav">
                <ul>
                    <li><Link to="/" >HOME</Link></li>
                    <li>BOOKSHELF</li>
                    <li><Link to="about">ABOUT</Link></li>
                </ul>
            </nav>
    )
}