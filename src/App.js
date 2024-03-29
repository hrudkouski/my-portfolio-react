import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./main/Skills";
import Projects from "./main/Projects";
import Slogan from "./main/Slogan";
import Contacts from "./footer/Contacts";
import Footer from "./footer/Footer";
import Particles from "react-particles-js";


const particlesOpt = {
    particles: {
        number: {
            value: 35,
            density: {
                enable: true,
                value_area: 600
            }
        }
    }
};

function App() {
    return (
        <div className="App">
            <Particles params={particlesOpt}
                       className="particles"/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;