import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./main/Skills";
import Projects from "./main/Projects";
import Slogan from "./main/Slogan";
import Contacts from "./footer/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="bodyApp">
            <div className="App">
                <div className="portfolio">
                    <Header/>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
