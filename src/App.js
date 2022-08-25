import React from "react";
import "./App.css";
import About from "./Componets/About";
import Navbar from "./Componets/Navbar";
import Intro from "./Componets/Intro";
import Skills from "./Componets/Skills";

const App = () => {
    return (
      <>
        <Navbar />
        <Intro />
        <About />
        <Skills />
      </>
      
    );
}

export default App;
