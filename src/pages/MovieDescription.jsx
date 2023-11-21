import React from "react";
import MovieDetails from "../components/MovieDetails";
import AdditionalContent from "../components/AdditionalContent";
import MoreLikeThis from "../components/MoreLikeThis";
import ComingSoonSection from "../components/ComingSoon";
import "../styles/Movie-Description.css";

const MovieDescription = () => {
  return (
    <div className="Movie-Description-Container">
      <MovieDetails />
      <AdditionalContent />
      <MoreLikeThis />
      <ComingSoonSection />
    </div>
  );
};

export default MovieDescription;
