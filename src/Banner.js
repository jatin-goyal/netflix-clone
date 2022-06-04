import React, { useEffect, useMemo, useRef, useState } from "react";
import Nav from "./Nav";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

//  this file includes nav bar tag so as to make of its functionality (background black when banner goes up )

function Banner() {
  // --------------------------------------------------- Nav Background colour change

  const targetRef = useRef(null);
  const [show, handleShow] = useState(false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    handleShow(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);
  // --------------------------------------------------------- Banner work down here

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  // console.log(movie);

  // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

  return (
    <>
      <Nav show={show} />

      <header
        ref={targetRef}
        className="banner"
        style={{
          backgroundSize: "cover",
          // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">More Info</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 200)}
          </h1>
        </div>
        <div className="banner_fadebutton"></div>
      </header>
    </>
  );
}

export default Banner;
