import React from "react";
import Work from "../Componets/Work";
import projectImage1 from "../assets/blue-jornal.png";
import projectImage2 from "../assets/blue-jornal1.png";
import projectImage3 from "../assets/blue-jornal2.png";
import projectImage4 from "../assets/blue-jornal3.png";
import projectImage5 from "../assets/blue-jornal4.png";

const Portfolio = () => {
    const data = [
        {
            id: 1,
            title: "BlueJornal",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis magni magnam molestias fugit reiciendis quis eveniet ut repudiandae in, inventore perspiciatis officia facilis quos possimus nihil reprehenderit, ratione nesciunt!",
            images: [
                { title: "BlueJournal", caption: "BlueJournal home page", url: projectImage1 },
                { title: "BlueJournal", caption: "BlueJournal friends page", url: projectImage2 },
                { title: "BlueJournal", caption: "BlueJournal users page", url: projectImage3 },
                { title: "BlueJournal", caption: "BlueJournal profile page", url: projectImage4 },
                { title: "BlueJournal", caption: "BlueJournal search user", url: projectImage5 },
            ],
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