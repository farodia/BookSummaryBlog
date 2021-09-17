import React from 'react';
import './App.css';
import SearchComponent from "./components/Search";
import NavigationComponent from "./components/Navigation";

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
            <body id="body-container">
            </body>
            <footer>
            </footer>
        </div>
    );
}

export default App;
