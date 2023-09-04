import React, { Fragment } from "react";
import "../Styles/NavBar.css";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

//IMPORT COMPONENTS HERE..
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trends from "./Trends";
import Pricing from "./Pricing";

function NavBar() {
  //useState
  const [toggle, setToggle] = useState(true);

  return (
    <Fragment>
      <nav className={toggle ? "" : "navBarColor"}>
        <div className="nav-options">
          <h1 id={toggle ? " " : "heading"}>REACTFLIX</h1>
          <NavLink
            to=""
            style={({ isActive }) => {
              return { color: isActive ? "#fff" : "#ee9b00" };
            }}
          >
            <span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
          </NavLink>
          <NavLink
            to="/TvShows"
            style={({ isActive }) => {
              return { color: isActive ? "#fff" : "#ee9b00" };
            }}
          >
            <span id={toggle ? "Movies" : "MoviesLight"}>TV Show</span>
          </NavLink>
          <NavLink
            to="/Trends"
            style={({ isActive }) => {
              return { color: isActive ? "#fff" : "#ee9b00" };
            }}
          >
            <span id={toggle ? "Movies" : "MoviesLight"}>Trendings</span>
          </NavLink>
          <NavLink
            to="/Pricing"
            style={({ isActive }) => {
              return { color: isActive ? "#fff" : "#ee9b00" };
            }}
          >
            <span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
          </NavLink>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Search Whatever you want" />
          <AiOutlineSearch fontSize={21} color="green" id="search" />
          <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
            <div
              id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}
            ></div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Movies />} />
        <Route path="TvShows" element={<TvShows />} />
        <Route path="Trends" element={<Trends />} />
        <Route path="Pricing" element={<Pricing />} />
      </Routes>
    </Fragment>
  );
}

export default NavBar;
