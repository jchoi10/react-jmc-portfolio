import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {

    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    },[currentCategory]);

    return(
        <header className="flex-row px-1">
        <h1>
            <a href="/">Jongwon (Michael) Choi's Portfolio</a>
        </h1>
        <nav>
            <ul className="flex-row mx-2">
                <li>
                    <a href="#about">
                        About
                    </a>
                </li>
                <li>
                    <span onClick={()=>handleClick('Contact')}>
                        Contact
                    </span>
                </li>
                {
                    categories.map((category) => (
                        <li className={`${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => { setCurrentCategory(category)}}>
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