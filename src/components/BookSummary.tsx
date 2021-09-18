import '../App.css';
import React from "react";
import EditSvg from "./EditiSvg";

const BookSummaryPage = () => {
    return (
        <div id="book-box">

            <div id="book-container">
                <div className="edit-column">
                    <div>
                        <h2 className="article-title">SUMMARY</h2>
                    </div>
                    <div className="edit-svg">
                        <EditSvg/>
                    </div>
                </div>
                <div className="content-row">
                    <div className="article-content">
                        <article>
                        </article>
                    </div>
                    <div className="title-navigator">
                    </div>
                </div>
            </div>

        </div>

    );
}
export default BookSummaryPage;