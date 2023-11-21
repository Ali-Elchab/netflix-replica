import React, { useEffect, useState } from "react";

const MoreLikeThis = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "6382d87ef0c27311d6d318b11bd9ec07";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 12));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="more-like-this">
      <h2>More Like This</h2>
      <div className="similar-movies">
        {movies.map((movie, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Movie ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreLikeThis;
