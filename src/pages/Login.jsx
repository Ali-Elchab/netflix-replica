import React from "react";
import HeroPage from "../components/HeroPage";
import EnjoyTv from "../components/EnjoyTv";
import SectionsSeperator from "../components/SectionsSeperator";
import Download from "../components/Download";
import Stream from "../components/Stream";
import ForKids from "../components/ForKids";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <HeroPage />
      <SectionsSeperator />
      <EnjoyTv />
      <SectionsSeperator />
      <Download />
      <SectionsSeperator />
      <Stream />
      <SectionsSeperator />
      <ForKids />
      <SectionsSeperator />
      <DropDown />
      <SectionsSeperator />
      <footer className="footer" style={styles}>
        <Footer />
      </footer>
    </div>
  );
};

const styles = {
  backgroundColor: `#000`,
  marginTop: `0`,
  padding: `56px`,
};

export default Login;
