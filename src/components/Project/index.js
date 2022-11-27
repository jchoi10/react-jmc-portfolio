import React from "react";
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Project({currentCategory}) {
    const { name, description } = currentCategory;
    return (
        <section>
            <div class="mx-3">
                <h1>{capitalizeFirstLetter(name)}</h1>
                <p>{description}</p>
                <ProjectList category={currentCategory.name} />
            </div>
        </section>
    );
};

export default Project;