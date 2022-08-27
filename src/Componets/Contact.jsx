import React from "react";
import ContactForm from "./ContactForm";
import image from "../assets/me.jpeg"

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h3 className="title">Contact Me</h3>
                <div 
                    className="contact__wrapper"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="contact__content--img">
                        <img src={image} alt="Head shot photo of Andrey." />
                    </div>
                    <div className="form-style">
                        <ul className="links">
                            <li>
                                <a 
                                    href="#" 
                                    target="blank"
                                >
                                    <i className="devicon-github-original" />
                                    <span className="visuallyHidden">Github</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="blank"
                                >
                                    <i className="devicon-linkedin-plain" />
                                    <span className="visuallyHidden">Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    target="blank"
                                >
                                    <i className="devicon-maya-plain" />
                                    <span className="visuallyHidden">Email</span>
                                </a>
                            </li>
                        </ul>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;