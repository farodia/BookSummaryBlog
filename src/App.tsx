import React from 'react';
import './App.css';
import SearchComponent from "./components/Search";
import NavigationComponent from "./components/Navigation";
import BookSummaryPage from './components/BookSummary';
import {useDispatch,useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators,State} from "./state/index"
import {AddCard, EditArticleContent} from "./state/action-creator";

function App() {
    const dispatch = useDispatch();
    const {EditArticleContent,AddCard,DeleteCard} = bindActionCreators(actionCreators,dispatch);
    const ArticleInfo = useSelector((state:State)=>state.articles);

    return (
        <div className="App">
            <header id="header-container">
                <div id="header">
                    <div id="header-title">
                        <a>Book.LOG</a>
                    </div>
                    <NavigationComponent/>
                    <SearchComponent/>
                </div>
            </header>
            <BookSummaryPage />
            <footer>
            </footer>
        </div>
    );
}

export default App;
