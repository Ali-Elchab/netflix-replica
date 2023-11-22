import React, { useEffect, useState } from "react";
import logo from "../assets/images/nficon2016.png";

const AdditionalContent = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    const apiKey = "6382d87ef0c27311d6d318b11bd9ec07";
    const movieApiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const castApiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;

    fetch(movieApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });

    fetch(castApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCastData(data.cast.slice(0, 20));
      })
      .catch((error) => {
        console.error("Error fetching cast data:", error);
      });
  }, []);

  return (
    <div className="additional-content">
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
            <div className="detail-text">Download and watch everywhere you go.</div>
          </div>
          <div className="detail-box">
            <div className="detail-title">Genres</div>
            <div className="detail-text">{movieDetails && movieDetails.genres.map((genre) => genre.name).join(", ")}</div>
          </div>
          <div className="detail-box">
            <div className="detail-title">This movie is...</div>
            <div className="detail-text">{movieDetails && movieDetails.adult ? "Violent" : "Not Violent"}</div>
          </div>
          <div className="detail-box">
            <div className="detail-title">Audio</div>
            <div className="detail-text">English - Audio Description, English [Original], French</div>
          </div>
        </div>
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
