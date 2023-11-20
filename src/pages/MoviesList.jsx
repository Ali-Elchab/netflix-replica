import React from "react";
import logo from "../assets/images/netflix-logo.png";
import MovieListsHeader from "../components/MovieListsHeader";
import "../styles/movies-list.css";
import MovieCards from "../components/MovieCards";
import Footer from "../components/Footer";

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
        </div>
        <div className="movieCards">
          <MovieCards />
        </div>

        <div className="watchMore">
          <div className="watchWrapper">
            <h2>There’s even more to watch.</h2>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
            <a href="/" className="btn joinButton redButton">
              JOIN NOW
            </a>
          </div>
        </div>
      </div>
      <div className="tudumPromo">
        <a href="https://www.netflix.com/tudum">
          Read about Netflix TV shows and movies and watch bonus videos on
          Tudum.com.
        </a>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MoviesList;
