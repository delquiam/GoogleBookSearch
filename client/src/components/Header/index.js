import React from "react";
// import "./style.css";
import Nav from "../Nav";

const Header = () => {
  return(
    <header>
      <Nav />

      <div className="row">
        <div className="col s12 m6 offset-m3 center  blue lighten-2-text text-darken-4">
          <h1>Bookle</h1>

          <h2>(React) Google Books Search</h2>

          <h3>Search for and Save Books of Interest</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;