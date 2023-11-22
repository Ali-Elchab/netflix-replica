import React from "react";
import "../styles/movie-lists-header.css";

// import { Link } from "react-router-dom";

const MovieListsHeader = (props) => {
  return (
    <div className="headerContainer">
      <div className="header">
        <a className="headerLogo" href="/">
          <img src={props.logo} alt="Netflix Logo" className="netflixLogo" />
        </a>
      </div>
      <div className="header">
        <div className="headerText">UNLIMITED TV SHOWS & MOVIES</div>
        <button className="btn joinButton links redButton">JOIN NOW</button>
        <a className="signIn links" href="/">
          SIGN IN
        </a>
      </div>
    </div>
  );
};

export default MovieListsHeader;
