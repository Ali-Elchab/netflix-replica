// import React from "react";

export const fetchMoviesByPage = async (route, apiKey, pageNumber) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${route}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies for page", pageNumber, ":", error);
    return [];
  }
};

// export const requestFetch = async ({ route, method, body, pageNumber = 1 }) => {
//   const response = fetch(`https://api.themoviedb.org/3/${route}?api_key=${apiKey}&page=${pageNumber}`, {
//     method: method,
//     body: JSON.stringify(body),
//   });

//   return response;
// };
