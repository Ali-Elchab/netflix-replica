import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MovieDescription from "./pages/MovieDescription";
import MoviesList from "./pages/MoviesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movieslist" element={<MoviesList />} />
        <Route path="/moviesdescription" element={<MovieDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
