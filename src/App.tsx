import React from 'react';
import './App.css';
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import BookSummary from "./components/BookSummary";

function App() {

    return (
        <div className="App">
            {/*改成css>*/}
            <header className="header-container">
                <div className="header">
                    <div className="header-title">
                        <span className="header-span">🄱</span>
                        <span>🅾🅾🅺.</span>
                        <span className="header-span">🄻🄾🄶</span>
                    </div>
                    <Navigation/>
                    <Search/>
                </div>
            </header>
            <BookSummary />
            <footer className="footer-background">
                <div className="footer-content">
                    <div className="footer-title">More...</div>
                    <a href="https://github.com/farodia/WebApp" className="item">GitHub</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
