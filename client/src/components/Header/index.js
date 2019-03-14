import React from "react";
// import "./style.css";
import Nav from "../Nav";

const Header = () => {
  return(
    <header>
      <Nav />

      <div className="row">
        <div className="col s12 m6 offset-m3 center  blue lighten-2-text text-darken-4">

          <h3>(React) Google Books Search</h3>

          <h4>Search for and Save Books of Interest</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;