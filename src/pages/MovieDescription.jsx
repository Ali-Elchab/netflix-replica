import React from "react";
import MovieDetails from "../components/MovieDetails";
import logo from "../assets/images/netflix-logo.png";
import AdditionalContent from "../components/AdditionalContent";
import MoreLikeThis from "../components/MoreLikeThis";
import Footer from "../components/Footer";
import ComingSoonSection from "../components/ComingSoon";
import MovieListsHeader from "../components/MovieListsHeader";
import "../styles/Movie-Description.css";
import { useParams } from "react-router-dom";

const MovieDescription = () => {
  const { id } = useParams();

  return (
    <div className="Movie-Description-Container">
      <MovieListsHeader logo={logo} />
      <div className="movie-description-body">
        <MovieDetails id={parseInt(id)} />
        <AdditionalContent id={parseInt(id)} />
        <MoreLikeThis />
        <ComingSoonSection />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MovieDescription;
