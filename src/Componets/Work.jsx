import React, { useState } from "react";
import ImageViewer from "./ImageViewer";

const Work = ({ title, description, technology, images, sourceUrl, liveViewUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <div className="project">
            <h4 className="project__title">{title}</h4>
            <div className="project__content">
                <div 
                    className="project__content--img" 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                ><section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                {
                    images.map((image, index) =>{
                        return <li id={"carousel__slide" + index}
                                tabIndex="0"
                                className="carousel__slide"
                                key={index}>
                            <img
                                src={image.url}
                                alt="A photo of Concert Account App Project."
                            />
                            <div 
                                className="carousel__snapper"
                                onClick={() => setIsOpen(true)}
                            ></div>
                        </li>
                        }
                    )
                }
                    
                </ol>
              </section>
                </div>
                <div 
                    className="project__content--text-right"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <p>
                        {description}
                    </p>

                    <div className="recent-work-info">
                        <ul>
                            {
                                technology.map((tech, index) => <li key={index}>{tech}</li>)
                            }
                        </ul>
                        <div className="project__content--links">
                            <a
                                href={sourceUrl}
                                target="blank"
                                className="button"
                                >GitHub</a>
                            <a
                                href={liveViewUrl}
                                target="blank"
                                className="button"
                                >Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <ImageViewer isOpen={isOpen} setIsOpen={setIsOpen} images={images} />
        </div>
    )
}

export default Work;