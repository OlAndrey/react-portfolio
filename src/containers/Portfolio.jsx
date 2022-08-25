import React from "react";
import Work from "../Componets/Work";
import projectImage1 from "../assets/blue-jornal.png"

const Portfolio = () => {
    const data = [
        {
            id: 1,
            title: "BlueJornal",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis magni magnam molestias fugit reiciendis quis eveniet ut repudiandae in, inventore perspiciatis officia facilis quos possimus nihil reprehenderit, ratione nesciunt!",
            imageUrl: projectImage1,
            sourceUrl: "https://github.com/OlAndrey/BlueJournal",
            liveViewUrl: "https://olandrey.github.io/BlueJournal",
            technology: [
                "React",
                "React-router-dom",
                "FireBase",
                "Bootstrap",
            ]
        },
    ]
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