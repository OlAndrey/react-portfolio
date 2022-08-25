import React from "react";
import "./App.css";
import About from "./Componets/About";
import Navbar from "./Componets/Navbar";
import Intro from "./Componets/Intro";
import Skills from "./Componets/Skills";
import Portfolio from "./containers/Portfolio";
import Contact from "./Componets/Contact";

const App = () => {
    return (
      <>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </>
      
    );
}

export default App;
