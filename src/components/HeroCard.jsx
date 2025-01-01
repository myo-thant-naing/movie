import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router";

export default function HeroCard({ movie }) {
  return (
    <div
      className="relative h-screen bg-cover bg-center pt-20"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col  text-white space-y-4 md:mt-30 justify-center ms-10">
        <h1 className="text-2xl font-bold drop-shadow-lg">{movie.title}</h1>
        <p className="text-sm max-w-lg">{movie.overview}</p>
        <Link to={movie.homepage}>
          <button className="bg-white text-black gap-1 flex items-center  px-5 py-2 rounded-full text-md font-medium hover:bg-opacity-90">
            <PlayCircleIcon className="w-6 " />
            Watch Now
          </button>
        </Link>
      </div>
    </div>
  );
}
