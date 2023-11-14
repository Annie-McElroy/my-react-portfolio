// Navbar component
// should have image as navbar
// will have four links: Home, About, Projects, and Resume
// Need to import Link from react-router-dom to properly link to the other pages

import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className="Header">
            <h1>Annie McElroy</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;