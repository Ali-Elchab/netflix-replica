import React from "react";
import MovieListsHeader from "../components/MovieListsHeader";
import logo from "../assets/images/netflix-logo.png";

const MovieDescription = () => {
  return (
    <div>
      <header className="header">
        <MovieListsHeader logo={logo} />
      </header>
    </div>
  );
};

export default MovieDescription;
