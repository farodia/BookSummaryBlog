import React, {useEffect} from "react";
import "../App.css";
import {BookCard} from "./BookCard";
import {State} from "../state";
import {useSelector} from "react-redux";
import {CardInfo} from "../state/reducers/articleReducer";
import {ShowAllCards} from "../hooks/showAllCards";

const BookSummary = () => {
    const bookCards = useSelector((state: State) => state.articles["bookCards"]);
    // const url = "http://localhost:8080";
    // useEffect(ShowAllCards(url),[bookCards]);
    return (
        <div className="book-box" >
            {bookCards ? bookCards.map((card: CardInfo, index: number) => {
                return (
                    <BookCard key={index} cardId={card.cardId} cardOrder={index}/>
                );
            }) : "Loading...."}
        </div>
    );
}
export default BookSummary;