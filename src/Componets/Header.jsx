import React from "react";
import logo from "../assets/logo.png"

const Navbar = () =>{
    return (
      <nav className="navbar" id="mainNav">
        <div className="navbar__wrapper">
            <a className="navbar__brand" href="#page-top">
                <img
                    src={logo}
                    alt="logo"
                    style={{ maxWidth: "100px" }}
                />
            </a>
            <button type="button">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="navbar__menu" id="navbarDefault">
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
      </nav>
    );
}

export default Navbar;