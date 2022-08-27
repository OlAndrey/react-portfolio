import React from "react";
import Typed from "react-typed";

const Intro = () => {
    return (
        <section className="intro" id="home">
            <div className="container">
                <div className="intro__wrapper">
                    <h1 className="intro__title">Hello, I am Andrey Oleynik</h1>
                    <p className="intro__subtitle">
                        <strong>
                        <Typed
                            strings={[
                            "Front End Developer",
                            "Software Engineer"
                            ]}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                        />
                        </strong>
                    </p>
                    <p>
                        <a
                        className="button intro__button"
                        href="#portfolio"
                        role="button"
                        >
                        View My Work
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Intro;
