import React, { Fragment } from "react";
import "../Styles/NavBar.css";
import { useState } from "react";

//IMPORTING REACT ICONS
import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  //useState
  const [toggle, setToggle] = useState(true);

  return (
    <Fragment>
      <nav className={toggle ? "" : "navBarColor"}>
        <div className="nav-options">
          <h1 id={toggle ? " " : "heading"}>REACTFLIX</h1>
          <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>TV Show</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>Trendings</span>
          <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Search Whatever you want" />
          <AiOutlineSearch fontSize={21} color="green" id="search"/>
          <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
            <div
              id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
            ></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
