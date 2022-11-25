import React, {useState} from "react";
import groupProject3 from "../../assets/large/PawShop.png";
import groupProject2 from "../../assets/large/My_Meds_Homepage.png";
import groupProject1 from "../../assets/large/EATionary_Homepage.png";
import { capitalizeFirstLetter } from "../../utils/helpers";

const ProjectList = (props) => {
    
    const [projects] = useState([
        {
            title: "Paw Shop (Group Project 3)",
            liveUrl: "https://pawshop.herokuapp.com/",
            image: groupProject3,
            imageName: "PawShop.png",
            description: "this application gives opportunity to pet owners to exchange accessories, food and etc.",
            githubRepo: "https://github.com/mnwana/paw-shop"
        },
        {
            title: "My Meds - Medication List Storage (Group Project 2)",
            liveUrl: "https://mymedlist.herokuapp.com/",
            image: groupProject2,
            imageName: "My_Meds_Homepage.png",
            description: "this application can save and manage patients list of medicine, which they are taking.",
            githubRepo: "https://github.com/mnwana/mymedlist"
        },
        {
            title: "EATionary - Recipe Finder (Group Project 1)",
            liveUrl: "https://jchoi10.github.io/eat-healthy/",
            image: groupProject1,
            imageName: "EATionary_Homepage.png",
            description: "this application recommands the user know what kind of recipes they could use with the current ingredients.",
            githubRepo: "https://github.com/jchoi10/eat-healthy"
        }
    ])

    return (
        <div>
            <div className="flex-row">
                {projects.map((project) => (
                    <div className="text-center" key={project.title}>
                        <div className="mx-2">
                            <h3>{project.title}</h3>
                            <p>{capitalizeFirstLetter(project.description)}</p>
                            <div>
                                <span>Live URL: </span><a href={project.liveUrl}>{project.liveUrl}</a>
                            </div>
                            <div className="mb-3">
                                <span>Github Repo URL: </span><a href={project.githubRepo}>{project.githubRepo}</a>
                            </div>
                        </div>
                        <img 
                            src={project.image}
                            alt={project.title}
                            className="img-thumbnail mx-1 mb-5"
                            style={{width: "75%"}}
                            key={project.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProjectList;