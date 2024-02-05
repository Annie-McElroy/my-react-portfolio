// Navbar component
// should have image as navbar
// will have four links: Home, About, Projects, and Resume
// Need to import Link from react-router-dom to properly link to the other pages

import { Link } from "react-router-dom";
import { My_Picture, Claire_Tongue } from "../images";
// import navbar_image from '../images/nav-bar-longer.png';
// import test2 from '../images/test2.png'
import "../styles/Nav.css";

function Nav() {
  return (
    <header className="Header">
      <div className="PicContainer">
        <img
          src={My_Picture}
          alt="Annie McElroy"
          className="MyPic" />
        <img
          src={Claire_Tongue}
          alt="Claire, black and tan dachshund dog"
          className="ClairePic"
        />
      </div>
      <nav className="Nav">
        {/* <div className="Head"> */}
        <h1>Annie McElroy</h1>
        <ul className="NavBar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        {/* </div> */}
        {/* <div className="PicContainer">
                        <img src={my_picture} alt="Annie McElroy" className="MyPic" />
                        <img src={claire_tongue} alt="Claire, black and tan dachshund dog" className="ClairePic" />
                    </div>
                <div>&nbsp;</div> */}
      </nav>
    </header>
  );
}

export default Nav;
