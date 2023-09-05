import axios from "axios";
import "../Styles/Videos.css";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import noImage from "./no-image.jpg";
import { Container } from "./NavBar";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const { toggle, inputValue } = useContext(Container);
  const [movieTitle, setMovieTitle] = useState("");

  const input = inputValue;
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500/";

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "0f898ec93930a149724e4e4c3c310af8",
        query: input,
      },
    });
    // To know our API key work or not .. console.log(data.data.results);
    const results = data.data.results;
    setMoviesData(results);
  };
  useEffect(() => {
    MovieCall();
  }, [input]); // Update by (every input) if Empty parameter to Run once the MovieCall function, to optimize the penformance ...
  console.log(moviesData);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div className={toggle ? "mainBgcolor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id="playIcon"
                    onClick={() => MoviesTitle(movie)}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : noImage
                    }
                    alt="no images"
                    onClick={() => MoviesTitle(movie)}
                  />
                  <h3
                    id={movie.title.length > 28 ? "smaler-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <AiOutlineClose
        id={trailer ? "Nothing" : "Exit1"}
        className={toggle ? "DarkTheme" : "LightThemeClose"}
        fontSize={55}
        color="fff"
        cursor={"pointer"}
        onClick={(trailer) => setTrailer(true)}
      />
    </Fragment>
  );
};

export default Movies;
