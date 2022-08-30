import React from "react";
import Work from "../Componets/Work";
import { data } from "../data/projectData";

const Portfolio = () => {
    
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio__wrapper">
                    <h3 className="title">Portfolio</h3>
                    {
                        data.map(item => <Work key={item.id} {...item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;