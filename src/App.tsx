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
                        <span><a>B</a></span>
                        <span><a>ook.</a></span>
                        <span><a>LOG</a></span>
                    </div>
                    <NavigationComponent/>
                    <SearchComponent/>
                </div>
            </header>
            <body>
            </body>
            <footer>
            </footer>
        </div>
    );
}

export default App;
