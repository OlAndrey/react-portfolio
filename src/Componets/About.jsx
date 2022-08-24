import React from "react";
import image from "../assets/me.jpeg"

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div 
                        className="about__content--img" 
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    >
                        <img src={image} alt="Head shot photo of Andrey." />
                    </div>
    
                    <div 
                        className="about__content--text" 
                        data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-duration="1500"
                    >
                        <h3 className="title">About Me</h3>
    
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Molestiae odio consequuntur enim nobis, ut illum explicabo 
                            velit earum, ipsa cumque impedit accusamus quia quas officiis 
                            obcaecati recusandae quae. Dolorum, velit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Laudantium, perferendis odit qui facilis dolor obcaecati
                            illum atque voluptatibus dicta ut quasi, eos ea quaerat 
                            officiis quos optio temporibus sint quae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Vel explicabo illo atque, ea dolorum, molestias facere ratione 
                            veniam vero inventore quidem iure fuga incidunt veritatis, qui 
                            necessitatibus esse aut reprehenderit.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default About;
