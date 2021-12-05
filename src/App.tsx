import React from 'react';
import './App.css';
import BookSummary from "./components/BookSummary";
import {HeaderContainer} from "./components/HeaderContainer";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {About} from "./components/About";


function App() {

    return (
        <Router>
        <div className="App">
            <HeaderContainer />
            <Routes>
               <Route path="/" element={<BookSummary />} />
                <Route path="about" element={<About />} />
            </Routes>

            <footer className="footer-background">
                <div className="footer-content">
                    <div className="footer-title">TO BE CONTINUED...</div>
                    <a href="https://github.com/farodia/WebApp" className="item">GitHub</a>
                </div>
            </footer>
        </div>
        </Router>
    );
}

export default App;
