import React from "react";
import "../styles/enjoy-tv.css";
import tv from "../assets/images/tv.png";
import enjoyVideo from "../assets/videos/enjoy-tv.mp4";

const EnjoyTv = () => {
  return (
    <div className="enjoyTv">
      <div className="enjoyTvDescription">
        <p>Enjoy on your TV</p>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>

      <div className="enjoyTvImage">
        <video
          src={enjoyVideo}
          className="tvVideo"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <img src={tv} alt="" className="tvImage" />
      </div>
    </div>
  );
};

export default EnjoyTv;
