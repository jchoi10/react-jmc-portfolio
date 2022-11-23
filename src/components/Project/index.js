import React from "react";


const Projects = () => {
    return (
        <section id="work" class="projects">
            <h2 class="section-title primary-border">Work</h2>
        <div>
        {/* first project */}
        <article class="proejcts">
            <a href="https://pawshop.herokuapp.com/">
                <img src="./assets/image/PawShop.png" alt="group proejct: Pet lovers exchange" />
            </a>
            <div class="project-ex">
                <h3 class="project-name">Paw Shop (Group Project3)</h3>
                <p>Live URL: <a href="https://pawshop.herokuapp.com/">https://pawshop.herokuapp.com/</a></p>
            </div>
        </article>

        {/* second project */}
        <article class="proejcts">
            <a href="https://mymedlist.herokuapp.com/">
                <img src="./assets/image/My_Meds_Homepage.png" alt="group proejct: Medication List Saving Application My Meds" />
            </a>
            <div class="project-ex">
                <h3 class="project-name">My Meds - Medication List Storage (Group Project2)</h3>
                <p>Live URL: <a href="https://mymedlist.herokuapp.com/">https://mymedlist.herokuapp.com/</a></p>
            </div>
        </article>

        {/* third project */}
        <article class="proejcts">
            <a href="https://jchoi10.github.io/eat-healthy/">
                <img src="./assets/image/EATionary_Homepage.png" alt="group proejct: recipe recommandation web application EATionary" />
            </a>
            <div class="project-ex">
                <h3 class="project-name">EATionary - Recipe Finder (Group Project1)</h3>
                <p>Live URL: <a href="https://jchoi10.github.io/eat-healthy/">https://jchoi10.github.io/eat-healthy/</a></p>
            </div>
        </article>

        {/* fourth proejct */}
        <article class="projects">
            <a href="https://jchoi10.github.io/horiseon-module-update/">
                <img src="./assets/image/HTML_Correction.png" alt="HTML correction web app example" />
            </a>
            <div class="proejct-ex">
                <h3 class="project-name">Update/Correct CSS</h3>
                <p>Live URL: <a href="https://jchoi10.github.io/horiseon-module-update/">https://jchoi10.github.io/horiseon-module-update/</a></p>
            </div>
        </article>

        {/* fifth project */}
        <article class="projects">
            <a href="https://jchoi10.github.io/jmc_portfolio/">
                <img src="./assets/image/run_buddy_homepage.png" alt="jongwon choi's web portfolio homepage" />
            </a>
            <div class="project-ex">
                <h3 class="project-name">Jongwon (Michael) Choi Portfolio</h3>
                <p>Live URL: <a href="https://jchoi10.github.io/jmc_portfolio/">https://jchoi10.github.io/jmc_portfolio/</a></p>
            </div>
        </article>
        
        {/* sixth project */}
        <article class="proejcts">
            <a href="https://jchoi10.github.io/password_generatorX/">
                <img src="./assets/image/password_generator.png" alt="password generator" />
            </a>
            <div class="project-ex">
                <h3 class="project-name">Password Generator</h3>
                <p>Live URL: <a href="https://jchoi10.github.io/password_generatorX/">https://jchoi10.github.io/password_generatorX/</a></p>
            </div>
        </article>

    </div>    
    </section>
    );
};

export default Projects;