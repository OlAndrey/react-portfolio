import React from "react";

const Footer = ({theme, toggleLight}) => {
    return (
        <footer className="footer">
            <div className="top">
                <a className="up" href="#home">
                <i className="fas fa-angle-double-up" />
                <span className="visuallyHidden">Go up</span>
                </a>
            </div>
            <div className="toggle-light">
                {
                    (theme !== "light")
                    ?<button className="up" onClick={() => toggleLight('light')}>
                        <i className="fas fa-solid fa-sun"></i>
                        <span className="visuallyHidden">Light</span>
                    </button>
                    :<button className="up" onClick={() => toggleLight('dark')}>
                        <i className="fas fa-solid fa-moon"></i>
                        <span className="visuallyHidden">Dark</span>
                    </button>
                }
            </div>
            <div>
                <div className="copyright">
                    <div className="developed-by">
                        &copy; 2022 Developed with&nbsp;
                        <i className="fas fa-heart yellow" />
                        <i className="fas fa-heart blue" />
                        by&nbsp;
                        <a href="#" target="blank">
                            Oleynik Andrey
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;