import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const [comingSoonMovies, setComingSoonMovies] = useState([]);

  useEffect(() => {
    const apiKey = "6382d87ef0c27311d6d318b11bd9ec07";
    const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setComingSoonMovies(data.results.slice(0, 8));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="coming-soon-section">
      <h2>Coming Soon</h2>
      <div className="coming-soon-items">
        {comingSoonMovies.map((movie) => (
          <div className="coming-soon-item" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
