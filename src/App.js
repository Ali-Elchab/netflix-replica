<<<<<<< Updated upstream
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Netflix</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
=======
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import MovieDescription from "./pages/MovieDescription";
// import MoviesList from "./pages/MoviesList";
import "./styles/App.css";
import logo from "./assets/images/netflix-logo.png";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header logo={logo} />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/movieslist" element={<MoviesList />} />
    //     <Route path="/moviesdescription" element={<MovieDescription />} />
    //   </Routes>
    // </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
