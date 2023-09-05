import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../Styles/TrailerMovie.css";

function TrailerTreding({ TrendingTitle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    setVideo(TrendingTitle);
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
        <ReactPlayer
          url={videoURL}
          controls={true}
          width={"1000px"}
          height={"700px"}
          muted={false}
        />
      </div>
    </Fragment>
  );
}

export default TrailerTreding;
