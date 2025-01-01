import { PlayIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovie();
  }, [id]);

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d32d674c039911e3a0638bd6ce414a3c&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
  };
  return (
    <div className="w-full h-screen">
      <div className="h-2/3 w-full relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10 px-5">
        <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-5">
          <div className="flex flex-col md:flex-row">
            {/* Movie Poster */}
            <div className="w-1/3  mb-5 md:mb-0">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Movie Details */}
            <div className="md:w-2/3 md:ml-5">
              <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
              <div className="text-gray-400 text-sm space-y-2 mt-3">
                <p>RunTime: {movie.runtime} mins</p>
                <p>Release Date: {movie.release_date}</p>
                <p>
                  Genres:{" "}
                  {movie.genres &&
                    movie.genres.map((genre) => genre.name).join(" , ")}
                </p>
              </div>
              <p className="mt-5">
                Overview:
                <br />
                {movie.overview}
              </p>
              <Link to={movie.homepage} className="mt-5 flex">
                <button className="border flex items-center border-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <PlayIcon className="w-6 text-red-500" /> Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
