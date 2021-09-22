import React from 'react';
import './App.css';
import SearchComponent from "./components/Search";
import NavigationComponent from "./components/Navigation";
import BookSummaryPage from './components/BookSummary';

function App() {
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
            <BookSummaryPage/>
            {/*<form>*/}
            {/*    <ul>*/}
            {/*        📚书籍名称：*/}
            {/*        <input required type="text" placeholder="请输入您将记录的书籍名称" name="bookTitle"/>*/}
            {/*    </ul>*/}
            {/*    <ul className="ul-textarea">*/}
            {/*        📃书籍总结：*/}
            {/*        <textarea required placeholder="请在此记录您对于本书的总结" rows={10} cols={30} name="bookSummary"/>*/}
            {/*    </ul>*/}
            {/*    <input type="submit" value="Submit"/>*/}
            {/*</form>*/}
            <footer>
            </footer>
        </div>
    );
}

export default App;
