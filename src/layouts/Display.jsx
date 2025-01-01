import React from "react";
import { Route, Routes } from "react-router";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import MovieList from "../components/MovieList";
import Detail from "../pages/Detail";
import Searched from "../pages/Searched";
export default function Display() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList title={"Popular Movies"} />} />
        <Route
          path="/upcoming"
          element={<MovieList title={"Upcoming Movies"} />}
        />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/search/:title" element={<Searched />} />
      </Routes>
    </div>
  );
}
