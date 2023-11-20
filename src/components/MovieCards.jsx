import React, { useEffect, useState } from "react";
import "../styles/movie-cards.css";
// import { Link } from "react-router-dom";
// import { json } from "react-router-dom";

const MovieCards = () => {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenres] = useState({});

  useEffect(() => {
    // My generated TMDB API key
    const apiKey = "c3abedee67f9d0c6922c117110e1f13a";

    // Fetch Genres
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const genresMap = {};
        data.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });
        setGenres(genresMap);
      })
      .catch((error) => console.log(error));

    // Fetch Movies
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // Organize movies by genre
  const moviesByGenre = {};
  movieList.forEach((movie) => {
    movie.genre_ids.forEach((genreId) => {
      if (!moviesByGenre[genreId]) {
        moviesByGenre[genreId] = [];
      }
      moviesByGenre[genreId].push(movie);
    });
  });

  return (
    <div>
      {Object.keys(moviesByGenre).map((genreId) => (
        <div key={genreId}>
          <h2 className="genreTitle">{genreList[genreId]}</h2>
          <div className="movieList">
            <ul
              style={{
                display: "flex",
                listStyleType: "none",
              }}
            >
              {moviesByGenre[genreId].map((movie) => (
                <li className="movieCard" key={movie.id}>
                  <a href="/moviesdescription" className="moviePoster">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </a>
                  <p className="movieTitle">
                    <a href="/moviesdescription">{movie.title}</a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
