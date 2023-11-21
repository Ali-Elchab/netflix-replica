import React from "react";
import "../styles/for-kids.css";
import kids from "../assets/images/kids.png";

const ForKids = () => {
  return (
    <div className="download">
      <div className="downloadPhoneImage">
        <img src={kids} alt="" className="phoneImage" />
      </div>

      <div className="forKidsDescription">
        <p>Create profiles for kids</p>
        <p>
          Send kids on adventures with their favorite <br />
          characters in a space made just for them—free with <br />
          your membership.
        </p>
      </div>
    </div>
  );
};

export default ForKids;
