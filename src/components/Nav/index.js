import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = () => {

    const categories = [
        {name: 'Work', description: 'Past coding work examples; web application'},
    ];

    const handleClick = (item) => {
        console.log(item);
        return item;
    };
    
    return(
        <header>
        <h1>
            <a href="/">Jongwon (Michael) Choi's Portfolio</a>
        </h1>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => handleClick("About")}>
                        About
                    </a>
                </li>
                <li className={"mx-2"}>
                    <a href="#contacts" onClick={() => handleClick("Contact")}>
                        Contact
                    </a>
                </li>
                {
                    categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => { handleClick(category.name); }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </nav>
        </header>
    );
};

export default Nav;