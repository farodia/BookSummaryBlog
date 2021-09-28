import React, {useEffect} from "react";
import "../App.css";
import {BookCard} from "./BookCard";
import {State} from "../state";
import {useSelector} from "react-redux";

const BookSummaryPage = () => {
    const cardIdInfo = useSelector((state: State) => state.articles["bookCards"]);
    console.log("this is raw bookCards", cardIdInfo);

    function showCards(cardIdInfo: Array<object>) {
        return (
            <div>
                {cardIdInfo ? cardIdInfo.map((card: any, index) => {
                    return (
                        <div key={index}>
                            <BookCard cardId={card.cardId} cardIndex={index}/>
                        </div>
                    );
                }) : "Loading...."}
            </div>

        );
    }

    return (
        <div id="book-box">
            <ul>
                {showCards(cardIdInfo)}
            </ul>
        </div>
    );
}
export default BookSummaryPage;