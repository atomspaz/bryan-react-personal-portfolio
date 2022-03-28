import React, { useState } from "react";
// IMPORT LOGO
import logo from "../../static/img/mainLogo2.svg";
// React Icons
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  document.title = "Bryan Loh's Personal Portfolio";

  return (
    <nav className="navbar1">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/#" className="nav-logo">
            <img src={logo} alt="nav-logo" />
          </a>
          <button
            className="nav-btn btn"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <i>{showNavbar ? <FaTimes /> : <FaBars />}</i>
          </button>
        </div>
        <div className={showNavbar ? "nav-links show-links" : "nav-links"}>
          <a href="/#" className="nav-link">
            tools
          </a>
          <a href="/#" className="nav-link">
            portfolio
          </a>
          <a href="/#" className="nav-link">
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
