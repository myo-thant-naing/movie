import { PlayIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/details/${movie.id}`}
      className="rounded-lg overflow-hidden relative hover:scale-105"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
        <PlayIcon className="text-red-500 w-14" />
      </div>
    </Link>
  );
}
