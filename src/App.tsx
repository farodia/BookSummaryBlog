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
            <footer>
            </footer>
        </div>
    );
}

export default App;
