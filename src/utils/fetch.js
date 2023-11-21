// import React from "react";

export const fetchMoviesByPage = async (apiKey, pageNumber) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies for page", pageNumber, ":", error);
    return [];
  }
};
