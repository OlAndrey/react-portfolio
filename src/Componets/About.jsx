import React, { useState } from "react";
import image from "../images/me.jpeg"
import ImageViewer from "./ImageViewer";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const images = [
        { title: "It is me", caption: "Andrey Oleynik photo", url: image },
    ]

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__wrapper">
    
                    <div 
                        className="about__content--text" 
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <h3 className="title">About Me</h3>
    
                        <p>
                            Hi there! My name is Andrey! I'm a Front-End Web Developer who has a knack for turning nothing into something.
                        </p>
                        <p>
                            My passion is building and exploring state-of-the-art, appealing websites. I 
                            have been studying web development since May 2021. Specializing in React, Redux. 
                            Build appealing websites through CSS frameworks such as Bootstrap4, and 
                            pre-processor SCSS. I also know BEM-naming, responsive layout and cross-browser. 
                        </p>
                    </div>
                    <div 
                        className="about__content--img" 
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        
                        <img 
                            src={image} 
                            alt="Head shot photo of Andrey."
                            onClick={() => setIsOpen(true)} 
                        />
                    </div>
                </div>
                
            </div>
            <ImageViewer isOpen={isOpen} setIsOpen={setIsOpen} images={images} />
        </section>
    );
}

export default About;
