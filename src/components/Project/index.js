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

    // const {pageSelected} = props;
    // const [curretProject, setCurrentProject] = useState(projects[0]);

    // const [projects] = useState([
    //     {
    //         title: "Paw Shop (Group Project3)",
    //         liveUrl: "https://pawshop.herokuapp.com/",
    //         image: screenshot1,
    //         imageName: "PawShop.png",
    //         description: "This application gives opportunity to pet owners to exchange accessories, food and etc.",
    //         githubRepo: "https://github.com/mnwana/paw-shop"
    //     },
    //     {
    //         title: "My Meds - Medication List Storage (Group Project2)",
    //         liveUrl: "https://mymedlist.herokuapp.com/",
    //         image: screenshot2,
    //         imageName: "My_Meds_Homepage.png",
    //         description: "This application can save and manage patients list of medicine, which they are taking.",
    //         githubRepo: "https://github.com/mnwana/mymedlist"
    //     },
    //     {
    //         title: "EATionary - Recipe Finder (Group Project1)",
    //         liveUrl: "https://jchoi10.github.io/eat-healthy/",
    //         image: screenshot3,
    //         imageName: "EATionary_Homepage.png",
    //         description: "This application recommands the user know what kind of recipes they could use with the current ingredients.",
    //         githubRepo: "https://github.com/jchoi10/eat-healthy"
    //     }
    // ])

    return (
        // <section>
        //     <h2>{capitalizeFirstLetter(projects.title)}</h2>
        //     <span>Live URL: </span><a href={project.liveUrl}>{project.liveUrl}</a>
        //     <div className="flex-row">
        //         <img
        //             src={projects.image}
        //             alt={projects.title}
        //             className="img-thumbnail mx-1"
        //             style={{width: "75%"}}
        //         />
        //     </div>
        // </section>

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