import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import screenshot1 from "../../assets/large/PawShop.png";
import screenshot2 from "../../assets/large/My_Meds_Homepage.png";
import screenshot3 from "../../assets/large/EATionary_Homepage.png";

const Project = (props) => {
    const project1 = {
        name: "Paw Shop (Group Project3)",
        liveUrl: "https://pawshop.herokuapp.com/",
    };

    const project2 = {
        name: "My Meds - Medication List Storage (Group Project2)",
        liveUrl: "https://mymedlist.herokuapp.com/",
    };

    const project3 = {
        name: "EATionary - Recipe Finder (Group Project1)",
        liveUrl: "https://jchoi10.github.io/eat-healthy/",
    };

    return (
        <section>
            <h2>{capitalizeFirstLetter(project1.name)}</h2>
            <span>Live URL: </span><a href={project1.liveUrl}>{project1.liveUrl}</a>
            <div className="flex-row">
                <img
                    src={screenshot1}
                    alt="third group project"
                    className="img-thumbnail mx-1"
                    style={{width: "75%"}}
                />
            </div>

            <h2>{capitalizeFirstLetter(project2.name)}</h2>
            <span>Live URL: </span><a href={project2.liveUrl}>{project2.liveUrl}</a>
            <div className="flex-row">
                <img
                    src={screenshot2}
                    alt="second group project"
                    className="img-thumbnail mx-1"
                    style={{width: "75%"}}
                />
            </div>

            <h2>{capitalizeFirstLetter(project3.name)}</h2>
            <span>Live URL: </span><a href={project3.liveUrl}>{project3.liveUrl}</a>
            <div className="flex-row">
                <img
                    src={screenshot3}
                    alt="first group project"
                    className="img-thumbnail mx-1"
                    style={{width: "75%"}}
                />
            </div>
        </section>
    );
};

export default Project;