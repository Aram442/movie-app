import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../Styles/TrailerMovie.css";

function TrailerMovies({ movieTitle, toggle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    try {
      setVideo(movieTitle);
      movieTrailer(video).then((res) => {
        setVideoURL(res);
      });
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error (e.g., set a default URL or show an error message).
    }
  }

  useEffect(() => {
    handleSearch();
  }, [videoURL]);
  console.log(video);
  return (
    <Fragment>
      <div className="Container"></div>
      <div className="player">
        <h1 id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}>
          {movieTitle}
        </h1>
        <ReactPlayer
          id="react-player"
          url={videoURL}
          controls={true}
          width={"50rem"}
          height={"31rem"}
          muted={false}
        />
      </div>
    </Fragment>
  );
}

export default TrailerMovies;
