import React from "react";

const Work = ({ title, description, technology, imageUrl, sourceUrl, liveViewUrl }) => {
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
                        src={imageUrl}
                        alt="A photo of Concert Account App Project."
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
        </div>
    )
}

export default Work;