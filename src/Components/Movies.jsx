import axios from "axios";
import "../Styles/Videos.css";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import noImage from "./no-image.jpg";
import { Container } from "./NavBar";

const Movies = () => {
  const Api = "https://api.themoviedb.org/3/discover/movie";
  const Images = "https://image.tmdb.org/t/p/w500/";

  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const { toggle } = useContext(Container);

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "0f898ec93930a149724e4e4c3c310af8",
      },
    });
    // To know our API key work or not .. console.log(data.data.results);
    const results = data.data.results;
    setMoviesData(results);
  };
  useEffect(() => {
    MovieCall();
  }, []); // Empty parameter to Run once the MovieCall function, to optimize the penformance ...
  console.log(moviesData);
  return (
    <Fragment>
      <div className={toggle ? "mainBgcolor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle color="#fff" fontSize={40} id="playIcon" />
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : noImage
                    }
                    alt="no images"
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
    </Fragment>
  );
};

export default Movies;
