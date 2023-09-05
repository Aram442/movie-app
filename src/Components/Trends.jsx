import React, { useEffect, useContext, useState, Fragment } from "react";
import { Container } from "./NavBar";
import axios from "axios";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";
import noImage from "./no-image.jpg";
import TrailerTreding from "../Trailers/TrailerTrending";

function Trends() {
  const Api = "https://api.themoviedb.org/3";
  const TrendsShown = "/trending/all/week";
  const Images = "https://image.tmdb.org/t/p/w500/";
  const { toggle, inputValue } = useContext(Container);
  const [trendArray, setTrendArray] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [trendTitle, setTrendTitle] = useState("");
  const input = inputValue;

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: "0f898ec93930a149724e4e4c3c310af8",
        query: input,
      },
    });
    // console.log(data);
    const results = data.data.results;
    setTrendArray(results);
  };
  useEffect(() => {
    setTimeout(() => {
      Trends(); //bo awa lera bangy dakaynawa bo away lagal har goranek rune Trends() bkatawa;
    }, 100);
  }, [input]); //Empty Array to Run our Function inside the useEffect.

  const TrendTitle = (trend) => {
    setTrendTitle(trend.name);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgcolor" : "secondaryBgColor"}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return (
              <Fragment id={trend.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TrendTitle(trend)}
                  />
                  <img
                    src={
                      trend.poster_path
                        ? `${Images}${trend.poster_path}`
                        : noImage
                    }
                    alt="no images"
                    onClick={() => TrendTitle(trend)}
                  />
                  <h3
                    id={trend.name > 28 ? "smaler-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {trend.name}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="fff"
            cursor={"pointer"}
            onClick={(trailer) => setTrailer(true)}
          />
          {trailer ? console.log : <TrailerTreding TrendingTitle={trendTitle} />}
        </div>
      </div>
    </Fragment>
  );
}

export default Trends;
