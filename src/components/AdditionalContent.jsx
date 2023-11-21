import React, { useEffect, useState } from "react";
import logo from "../Assets/Screenshot 2023-11-17 at 10.42.36 PM.png";

const AdditionalContent = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const movieId = 820609; // Your movie ID
    const apiKey = "6382d87ef0c27311d6d318b11bd9ec07";
    const movieApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const castApiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

    // Fetch movie details
    fetch(movieApiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched movie details
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });

    // Fetch cast data
    fetch(castApiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched cast data
        setCastData(data.cast);
      })
      .catch((error) => {
        console.error("Error fetching cast data:", error);
      });
  }, []);

  return (
    <div className="additional-content">
      {/* Your split-box and text-divider sections */}
      <div className="split-box">
        <div className="split-box-logo">
          <img src={logo} alt="small-logo" />
          <span className="split-box-text">Watch all you want.</span>
        </div>
        <button className="split-box-button">JOIN NOW</button>
      </div>
      <div className="text-divider">
        <div className="horizontal-line"></div>
        <p>{movieDetails && movieDetails.overview}</p>
        <div className="horizontal-line"></div>
      </div>
      <div className="additional-movie-details">
        <h2>More Details</h2>
        <div className="details-section">
          <div className="detail-box">
            <div className="detail-title">Watch offline</div>
            <div className="detail-text">
              Download and watch everywhere you go.
            </div>
          </div>
          {/* Existing detail-box components */}
          {/* ... */}
          {/* Adapted detail-box for Genres */}
          <div className="detail-box">
            <div className="detail-title">Genres</div>
            <div className="detail-text">
              {movieDetails &&
                movieDetails.genres.map((genre) => genre.name).join(", ")}
            </div>
          </div>

          {/* Adapted detail-box for "This movie is..." */}
          <div className="detail-box">
            <div className="detail-title">This movie is...</div>
            <div className="detail-text">
              {movieDetails && movieDetails.adult ? "Violent" : "Not Violent"}
            </div>
          </div>
          <div className="detail-box">
            <div className="detail-title">Audio</div>
            <div className="detail-text">
              English - Audio Description, English [Original], French
            </div>
          </div>
          {/* Adapted detail-box for Audio */}
          {/* ... */}
        </div>
        {/* Fetch small description and populate */}

        {/* Adapted cast-section */}
        <div className="cast-section">
          <div className="cast-title">Cast</div>
          <div className="cast-names">
            {castData.map((cast) => (
              <div key={cast.id} className="cast-column">
                <div className="cast-name">{cast.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalContent;
