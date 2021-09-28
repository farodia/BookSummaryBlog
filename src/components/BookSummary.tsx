import React from "react";
import "../App.css";
import {BookCard} from "./BookCard";
import {State} from "../state";
import {useSelector} from "react-redux";

const BookSummaryPage = () => {
    const cardIdInfo= useSelector((state:State)=>state.articles["bookCards"]);
    const cardsAmounts = cardIdInfo.length;
    console.log("this is bookCards");
    function showCards(cardIdInfo:Array<object>) {
        return (
         cardIdInfo.map((card:any,index)=>{
             console.log("this is card",card.cardId);
             return (
                 <li key={index}>
                     <BookCard cardId ={card.cardId}/>
                 </li>
             );
         })
        );
    }

    return (
        <div id="book-box">
            {/*<BookCard/>*/}
            {showCards(cardIdInfo)}
            {/*<ul>*/}

            {/*</ul>*/}
        </div>
    );
}
export default BookSummaryPage;