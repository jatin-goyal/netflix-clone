import React from "react";
import "./HomeScreen.css";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Banner /> {/* this includes nav bar and banner component tags both */}
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchURL={requests.fetchTopRated} /> */}
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
