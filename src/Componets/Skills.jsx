import React from "react";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="skills__wrapper">
                    <h3 className="title">Technical Skills</h3>
                    <div className="skills__list" data-aos="fade-up"
                        data-aos-duration="1500">
                        <ul>
                            <li>
                                <i className="devicon-html5-plain" aria-hidden="true" />
                                <p>HTML5</p>
                            </li>
                            <li>
                                <i className="devicon-css3-plain" aria-hidden="true" />
                                <p>CSS3</p>
                            </li>
                            <li>
                                <i className="devicon-sass-original" aria-hidden="true" />
                                <p>Sass</p>
                            </li>
                            <li>
                                <i className="devicon-javascript-plain" aria-hidden="true" />
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <i className="devicon-typescript-plain" aria-hidden="true" />
                                <p>TypeScript</p>
                            </li>
                            <li>
                                <i className="devicon-react-original" aria-hidden="true" />
                                <p>React</p>
                            </li>
                            <li>
                                <i className="devicon-redux-original" aria-hidden="true" />
                                <p>Redux</p>
                            </li>
                            <li>
                                <i className="devicon-materialui-plain" aria-hidden="true" />
                                <p>MUI</p>
                            </li>
                            <li>
                                <i className="devicon-firebase-plain" aria-hidden="true" />
                                <p>Firebase</p>
                            </li>
                            <li>
                                <i className="devicon-github-plain" aria-hidden="true" />
                                <p>GitHub</p>
                            </li>
                            <li>
                                <i className="devicon-git-plain" aria-hidden="true" />
                                <p>Git</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;