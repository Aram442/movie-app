import React, { Fragment, Suspense, useState } from "react";
import "../Styles/NavBar.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

//IMPORT COMPONENTS HERE..
import Movies from "./Movies";
import TvShows from "./TvShows";
import Trends from "./Trends";
import Pricing from "./Pricing";

export const Container = React.createContext();

function NavBar() {
  //useState
  const [toggle, setToggle] = useState(true);
  const [inputValue, setInputValue] = useState("");
  return (
    <Container.Provider value={{ toggle, inputValue }}>
      <Fragment>
        <nav className={toggle ? "" : "navBarColor"}>
          <div className="nav-options">
            <h1 id={toggle ? " " : "heading"}>KURD FLIX</h1>
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
            <input
              type="text"
              placeholder="Search Whatever you want"
              onChange={(e) => setInputValue(e.target.value)}
            />
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
    </Container.Provider>
  );
}

export default NavBar;
