import React from "react";

const Footer = ({theme, toggleLight}) => {
    return (
        <footer class="footer">
            <div class="top">
                <a class="up" href="#home">
                <i class="fas fa-angle-double-up" />
                <span class="visuallyHidden">Go up</span>
                </a>
            </div>
            <div class="toggle-light">
                {
                    (theme !== "light")
                    ?<button class="up" onClick={() => toggleLight('light')}>
                        <i class="fas fa-solid fa-sun"></i>
                        <span class="visuallyHidden">Light</span>
                    </button>
                    :<button class="up" onClick={() => toggleLight('dark')}>
                        <i class="fas fa-solid fa-moon"></i>
                        <span class="visuallyHidden">Dark</span>
                    </button>
                }
            </div>
            <div>
                <div class="copyright">
                    <div class="developed-by">
                        &copy; 2022 Developed with&nbsp;
                        <i class="fas fa-heart yellow" />
                        <i class="fas fa-heart blue" />
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