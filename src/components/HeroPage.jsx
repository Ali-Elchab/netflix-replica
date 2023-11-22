import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from './DropDown';<Dropdown/>
import "../styles/hero-page.css";
import logo from "../assets/images/Netflix_2015_logo.svg.png";
import languageIcon from "../assets/images/languageIcon.svg";
import listIcon from "../assets/images/listIcon.svg";

const HeroPage = () => {
  return (
    <div className="loginPage">
      <div className="heroPage">
        <div className="opacityBackground">
          <div className="navbarContainer">
            <div className="navbar">
              <div className="logo">
                <img src={logo} alt="logo" className="logo1"></img>
              </div>
              <div className="navbarLeft">
                <button className="languageButton">
                  <img
                    src={languageIcon}
                    alt="language Icon"
                    className="languageIcon"
                  ></img>
                  <p className="languageName">English</p>
                  <img
                    src={listIcon}
                    alt="list Icon"
                    className="listIcon"
                  ></img>
                </button>
                <a href="/movieslist" className="signinButtonLink">
                  Sign In
                </a>
              </div>
            </div>
          </div>

          <div className="heroDescription">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Plans now start at USD3.99/month.</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="emailSubmit">
              <input type="text" placeholder="Email address" />
              <Link to="/movieslist" className="startedButtonLink">
                <button className="startedButton">Get Started &gt; </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
