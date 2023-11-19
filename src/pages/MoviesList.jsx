import React from "react";
import logo from "../assets/images/netflix-logo.png";
import MovieListsHeader from "../components/MovieListsHeader";
import "../styles/movies-list.css";
import MovieCards from "../components/MovieCards";

const MoviesList = () => {
  return (
    <div className="container">
      <header className="header">
        <MovieListsHeader logo={logo} />
      </header>
      <div className="body">
        <div className="bodyHead">
          <div className="bodyTitle">Movies</div>
          <div className="bodyDesc">
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </div>
          <div className="movieCards">
            <MovieCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
