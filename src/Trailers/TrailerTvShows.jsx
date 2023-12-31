import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../Styles/TrailerMovie.css";

function TrailerTvShows({ TvShowsTitle, toggle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    setVideo(TvShowsTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  useEffect(() => {
    handleSearch();
  }, [videoURL]);

  return (
    <Fragment>
      <div className="Container"></div>
      <div className="player">
        <h1 id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}>
          {TvShowsTitle}
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

export default TrailerTvShows;
