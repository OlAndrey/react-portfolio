import React, { useState } from "react";
import logo from "../assets/logo.png"

const Navbar = () =>{
    const [showMenu, setShowMenu] = useState(false)

    return (
      <nav className="navbar" id="mainNav">
        <div className="container">
        <div className="navbar__wrapper">
            <a className="navbar__brand" href="#home">
                <img
                    src={logo}
                    alt="logo"
                    style={{ maxWidth: "100px" }}
                />
            </a>
            <div className="navbar__button">
                <button 
                    className={"navbar__button-toggler " + (!showMenu ? "collapsed" : "" )} 
                    type="button" 
                    onClick={() => setShowMenu(!showMenu)}
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