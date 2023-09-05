import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./NavBar";
import noImage from "./no-image.jpg";
import axios from "axios";
import TrailerTvShows from "../Trailers/TrailerTvShows";

function TvShows() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const Shown = input ? "search" : "discover";
  const [title, setTitle] = useState("");
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`;
  const Images = "https://image.tmdb.org/t/p/w500/";

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "0f898ec93930a149724e4e4c3c310af8",
        query: input,
      },
    });
    // To know our API key work or not .. console.log(data.data.results);
    const results = data.data.results;
    setShowData(results);
    // console.log(showData);
  };

  useEffect(() => {
    setTimeout(() => {
      TvShows(); //we call TvShows() in useEffect in order to Call Tvshow by Each Rendering the our website
    }, 100);
  }, [input]); // Update by (every input) if Empty parameter to Run once the MovieCall function, to optimize the penformance ...
  // console.log(showData)

  const TvShowTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div className={toggle ? "mainBgcolor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((shows) => {
            return (
              <Fragment id={shows.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TvShowTitle(shows)}
                  />
                  <img
                    src={
                      shows.poster_path
                        ? `${Images}${shows.poster_path}`
                        : noImage
                    }
                    alt="no images"
                    onClick={() => TvShowTitle(shows)}
                  />
                  <h3
                    id={shows.name.length > 28 ? "smaler-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {shows.name}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerTvShows TvShowsTitle={title} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="fff"
            cursor={"pointer"}
            onClick={(trailer) => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default TvShows;
