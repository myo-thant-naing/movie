import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "../components/MovieCard";

export default function Searched() {
  const { title } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getSearchedMovies();
  }, [title]);
  const getSearchedMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d32d674c039911e3a0638bd6ce414a3c&language=en-US&query=${title}&page=1&include_adult=false`
    );

    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="mt-20 space-y-10">
      <h1 className="text-4xl font-bold text-white text-center">
        Search results for "{title}"
      </h1>

      {movies == false && (
        <h2 className="text-4xl font-bold text-gray-400 text-center">
          No movies found
        </h2>
      )}

      <div className="grid grid-cols-3 md:grid-cols-8 gap-4 p-10">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
