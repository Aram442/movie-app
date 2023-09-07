import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../Styles/TrailerMovie.css";

function TrailerTreding({ TrendingTitle, toggle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    try {
      if (TrendingTitle && typeof TrendingTitle === 'string') {
        setVideo(TrendingTitle);
        movieTrailer(video).then((res) => {
          setVideoURL(res);
        });
      } else {
        // Handle the case when TrendingTitle is not a valid string
        console.error("Invalid TrendingTitle:", TrendingTitle);
        // You can set a default URL or show an error message here.
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle other potential errors.
    }
  }
  

  useEffect(() => {
    handleSearch();
  }, [videoURL]);

  return (
    <Fragment>
      <div className="Container"></div>
      <div className="player">
        <h1 id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}>
          {TrendingTitle}
        </h1>
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
