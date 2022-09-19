import React from "react";
import Logo from "../../images/productwhite.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="navbar-logo" className="navbar-img" />

        <Link>
          <p>Leanpitch</p>
        </Link>
      </div>
      <ul className="navbar-elements">
        <li className="active">
          <Link to="/subcribe">
            <p>Subscibe</p>
          </Link>
        </li>
        <li>
          <Link to="/constactus">
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
