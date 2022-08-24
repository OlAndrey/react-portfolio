import React from "react";
import "./App.css";
import About from "./Componets/About";
import Navbar from "./Componets/Header";
import Intro from "./Componets/Intro";

const App = () => {
    return (
      <>
        <Navbar />
        <Intro />
        <About />
      </>
      
    );
}

export default App;
