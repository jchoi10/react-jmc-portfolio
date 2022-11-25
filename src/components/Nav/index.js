import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {

    // const categories = [
    //     {name: 'Work', description: 'Past coding work examples; web application'},
    // ];

    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    // };

    // const [categories] = useState([
    //     {name: 'Work', description: 'Past coding work examples; web application'},
    // ]);

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contacts">
                        Contact
                    </a>
                </li>
                {
                    categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
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