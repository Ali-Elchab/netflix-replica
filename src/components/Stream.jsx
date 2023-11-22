import React from "react";
import "../styles/stream.css";
import devicePile from "../assets/images/device-pile.png";
import videoDevices from "../assets/videos/video-devices.m4v";

const Stream = () => {
  return (
    <div className="stream">
      <div className="streamDescription">
        <p>Watch everywhere</p>
        <p>
          Stream unlimited movies and TV shows on your <br /> phone, tablet,
          laptop, and TV.
        </p>
      </div>

      <div className="streamTvImage">
        <video
          src={videoDevices}
          className="streamVideo"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <img src={devicePile} alt="" className="streamImage" />
      </div>
    </div>
  );
};

export default Stream;
