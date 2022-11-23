import React from "react";
import coverImage from "../assets/cover/hero_background.JPG";

const About = () => {
    return(
        <section id="about" class="intro">
            <div class="flex-row">
                <h2 class="section-title primary-border">About</h2>
            </div>  
            <div class="flex-row">
                <p>
                <b>Jongwon (Michael) Choi</b> (Republic of Korea, 1989) is a designer, developer and educator. He currently works at Rice+Lipka Architects as an architectural designer. Jongwon graduated in 2019 with M.Arch degree from Columbia University Graduate School of Architecture, Planning and Preservation.<br/>
                Jongwon likes bouldering/indoor climbing, swimming, travel and film photography.
                </p>
                <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover" />
            </div>
        </section>
    )
};

export default About;