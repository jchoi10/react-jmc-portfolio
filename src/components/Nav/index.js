import React from "react";

const Nav = () => {
    const handlerClick = () => {
        console.log("click handled");
    };
    
    return(
        <header>
        <h1>
            <a href="/">Jongwon (Michael) Choi's Portfolio</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={() => handleClick()}>About</a>
                </li>
                <li>
                    <a href="#work" onClick={() => handleClick()}>Work</a>
                </li>
                <li>
                    <a href="#contacts" onClick={() => handleClick()}>Contact</a>
                </li>
            </ul>
        </nav>
        </header>
    )
};

export default Nav;