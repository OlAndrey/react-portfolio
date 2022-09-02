import React, { useEffect, useState } from "react";
import About from "./Componets/About";
import Navbar from "./Componets/Navbar";
import Intro from "./Componets/Intro";
import Skills from "./Componets/Skills";
import Portfolio from "./containers/Portfolio";
import Contact from "./Componets/Contact";
import Footer from "./Componets/Footer";

const App = () => {
  const [theme, setTheme] = useState(null);
  const body = document.querySelector('body');

  useEffect(() => {
    const dataTheme = localStorage.getItem('theme');
    if(dataTheme){
      setTheme(dataTheme)
      if(dataTheme === "light")
        body.classList.add("light")
    }
    else
      setTheme("dark")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleLight = (theme) => {
    localStorage.setItem('theme', theme);
    body.classList.toggle("light")
    setTheme(theme)
  }

  return (
    <>
    {
      theme
      ?<>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer toggleLight={toggleLight} theme={theme} />
      </>
      :<div>Loading...</div>
    }
    </>
  );
}



export default App;
