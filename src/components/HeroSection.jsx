import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  const [relatedMovie, setRelatedMovie] = useState([]);
  useEffect(() => {
    getRelatedMovies();
  }, []);
  const getRelatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=d32d674c039911e3a0638bd6ce414a3c&language=en-US"
    );

    const data = await response.json();
    setRelatedMovie(data.results);
  };
  return (
    <>
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
        }}
      >
        {relatedMovie.map((movie) => (
          <SplideSlide key={movie.id}>
            <HeroCard movie={movie} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
