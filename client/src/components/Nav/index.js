import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-3">
        <a className="brand-logo left blue lighten-3 text-darken-4" href="/">
        
        </a>

        <ul id="nav-mobile">
          <li>
            <Link
              to="/search"
              className={
                "blue-lighten-text text-darken-4 " +
                (window.location.pathname === "/search" ? "active" : "")
              }
            >
              Search
            </Link>
          </li>

          <li>
            <Link
              to="/saved"
              className={
                "blue-lighten-text text-darken-4 " +
                (window.location.pathname === "/saved" ? "active" : "")
              }
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
