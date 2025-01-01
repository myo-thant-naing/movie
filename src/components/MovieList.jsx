import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import HeroSection from "./HeroSection";

export default function MovieList({ title }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, [title]);

  const getMovies = async () => {
    const response = await fetch(
      title === "Popular Movies"
        ? "https://api.themoviedb.org/3/movie/popular?api_key=d32d674c039911e3a0638bd6ce414a3c&language=en-US"
        : "https://api.themoviedb.org/3/movie/upcoming?api_key=d32d674c039911e3a0638bd6ce414a3c&language=en-US"
    );

    const data = await response.json();
    setMovies(data.results);
  };
  return (
    <>
      <HeroSection />
      <div className="mt-10 space-y-10">
        <h1 className="text-4xl font-bold text-white text-center">{title}</h1>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 p-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}
