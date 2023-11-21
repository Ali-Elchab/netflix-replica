import React, { useEffect, useState } from "react";
import "../styles/movie-cards.css";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { fetchMoviesByPage } from "../core/fetch";
// import { Link } from "react-router-dom";
// import { json } from "react-router-dom";

const MovieCards = (genreId) => {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenres] = useState({});

  const slideLeft = (genreId) => {
    let slider = document.getElementById(`slider-${genreId}`);
    if (slider) {
      slider.scrollBy(-1000, 0); // Scroll to the left by subtracting 500 pixels
    }
  };

  const slideRight = (genreId) => {
    let slider = document.getElementById(`slider-${genreId}`);
    if (slider) {
      slider.scrollBy(1000, 0); // Scroll to the right by adding 500 pixels
    }
  };
  useEffect(() => {
    // My generated TMDB API key
    const apiKey = "c3abedee67f9d0c6922c117110e1f13a";

    // Fetch Genres
    const fetchAllGenres = () => {
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((response) => response.json())
        .then((data) => {
          const genresMap = {};
          data.genres.forEach((genre) => {
            genresMap[genre.id] = genre.name;
          });
          setGenres(genresMap);
        })
        .catch((error) => console.log(error));
    };
    fetchAllGenres();
    // Fetch Movies

    const fetchAllMovies = async () => {
      const totalPages = 14;
      const allMovies = [];
      let route = "discover/movie";
      try {
        for (let i = 1; i <= totalPages; i++) {
          const movies = await fetchMoviesByPage(route, apiKey, i);
          allMovies.push(...movies);
        }
        setMovieList(allMovies);
      } catch (error) {
        console.error("Error fetching all movies:", error);
      }
    };
    fetchAllMovies();
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
        <div key={genreId} className="genreList">
          <h2 className="genreTitle">{genreList[genreId]}</h2>
          <div className="movieList">
            <MdChevronLeft onClick={() => slideLeft(genreId)} size={40} className="arrowLeft" />
            <ul id={`slider-${genreId}`}>
              {moviesByGenre[genreId].map((movie) => (
                <li className="movieCard" key={movie.id}>
                  <Link to={`/moviesdescription/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <p className="movieTitle">
                    <a href="/moviesdescription">{movie.title}</a>
                  </p>
                </li>
              ))}
            </ul>
            <MdChevronRight onClick={() => slideRight(genreId)} size={40} className="arrowRight" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
