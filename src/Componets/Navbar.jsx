import React, { useEffect, useState } from "react";
import logo from "../images/logo.png"

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false);
    const [changeBG, setChengeBG] = useState(false);
    const links = ["home", "about", "skills", "portfolio", "contact"];
    let coordinate = [ 0, 0, 0, 0, 0 ]

    const toggleActiveLink = (index) => {
        const navLinks = document.querySelectorAll('.nav__link');
        const linkActive = document.querySelector('.nav__link.active')
        if(navLinks[index] !== linkActive){
            linkActive.classList.remove('active')
            navLinks[index].classList.add('active')
        }
    }

    const scrollHandler = () => {
        for (let i = 0; i < links.length; i++) {
            const element = document.querySelector('#' + links[i]);
            const scrollTop = document.body.scrollTop + element.getBoundingClientRect().top;
            const scrollBottom = element.getBoundingClientRect().bottom;
            if( i === links.length - 1 && scrollBottom < 1110){
                toggleActiveLink(i)
                return 
            }
            if( i === 0){
                if(scrollTop !== 0){
                    setChengeBG(true);
                    document.querySelector('.top').classList.remove("d-none")
                }
                else{
                    setChengeBG(false)
                    document.querySelector('.top').className = "top d-none"
                }
            }
            coordinate[i] = scrollTop;
        }
        let indexOfMax = 0;
        for (let j = 1; j < coordinate.length; j++){ 
            if ((coordinate[j] < 50) && coordinate[j] > coordinate[indexOfMax]){
                indexOfMax = j;
            }
        }
        toggleActiveLink(indexOfMax)
    };
    
    useEffect(() => {      
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener('scroll', scrollHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setBG2 = () => {
        setChengeBG(true) 
        setShowMenu(!showMenu)
    }

    return (
      <nav className={"navbar" + (changeBG ?" bg-var2": "")} id="mainNav">
        <div className="container">
        <div className="navbar__wrapper">
            <a className="navbar__brand" href="#home">
                <img
                    src={logo}
                    alt="logo"
                    style={{ maxWidth: "4.5em" }}
                />
            </a>
            <div className="navbar__button">
                <button 
                    className={"navbar__button-toggler " + (!showMenu ? "collapsed" : "" )} 
                    type="button" 
                    onClick={setBG2}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={"navbar__menu " + (showMenu ? "show" : "")} id="navbarDefault">
                <ul className="navbar__nav">
                    <li className="nav__item">
                        <a className="nav__link js-scroll active" href="#home">
                        Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link js-scroll" href="#about">
                        About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link js-scroll" href="#skills">
                        Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link js-scroll" href="#portfolio">
                        Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link js-scroll" href="#contact">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
      </nav>
    );
}

export default Navbar;