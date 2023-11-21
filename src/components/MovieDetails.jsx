import React, { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const movieId = 820609; // Your movie ID
  const apiKey = "6382d87ef0c27311d6d318b11bd9ec07";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [movieId, apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const castMembers = movieData.credits?.cast || [];

  const backgroundStyles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="movie-details" style={backgroundStyles}>
      <div className="details-overlay">
        <h1 className="movie-name">{movieData.title}</h1>
        <div className="mini-movie-name">{movieData.title}</div>
        <div className="mini-description">
          <span className="release-year">{movieData.release_date}</span> |{" "}
          <span className="rating">{movieData.adult ? "18+" : "PG"}</span> |{" "}
          <span className="duration">{movieData.runtime}m</span> |{" "}
          <span className="genre">
            {movieData.genres.map((genre) => genre.name).join(", ")}
          </span>
        </div>
        <div className="story-line">{movieData.overview}</div>
        <div className="stars">
          <span className="starring-label">Starring: </span>
          <span className="actor-list">
            {castMembers
              .slice(0, 3)
              .map((actor) => actor.name)
              .join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
