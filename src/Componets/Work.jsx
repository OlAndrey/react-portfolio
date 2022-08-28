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
                >
                    <img
                        src={images[0].url}
                        alt="A photo of Concert Account App Project."
                        onClick={() => setIsOpen(true)}
                    />
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
                                className="btn"
                                >GitHub</a>
                            <a
                                href={liveViewUrl}
                                target="blank"
                                className="btn"
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