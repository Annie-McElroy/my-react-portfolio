// Navbar component
// should have image as navbar
// will have four links: Home, About, Projects, and Resume
// Need to import Link from react-router-dom to properly link to the other pages
import { Link } from "react-router-dom";
import claire_tongue from '../images/claire-tongue-edit1.jpg';
import my_picture from '../images/Annie_B1_Edit2.jpg';
import navbar_image from '../images/nav-bar-longer.png';
import '../styles/Nav.css';

function Nav() {
    return (
        <header className="Header">
            <h1>Annie McElroy</h1>
            <nav className="Nav">
                <div className="PicContainer">
                    <img src={my_picture} alt="Annie McElroy" className="MyPic" />
                    <img src={claire_tongue} alt="Claire, black and tan dachshund dog" className="ClairePic" />
                </div>
                {/* <img src={navbar_image} alt="navbar" className="NavImage"/> */}
                <ul className="NavBar-list">
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