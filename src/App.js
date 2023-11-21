import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import MovieDescription from "./pages/MovieDescription";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import MoviesList from "./pages/MoviesList";
import MovieDescription from "./pages/MovieDescription";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movieslist" element={<MoviesList />} />
        <Route path="/moviesdescription/:id" element={<MovieDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
