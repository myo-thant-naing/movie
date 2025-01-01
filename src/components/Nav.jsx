import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { NavLink, useNavigate } from "react-router";
export default function Nav() {
  const [searchKey, setSearchKey] = useState("");

  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (searchKey) {
      navigate(`/search/${searchKey}`);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const searchHandle = () => {
    setIsOpen(true);
  };
  return (
    <nav className="flex  justify-between items-center py-6 px-10 bg-black h-auto md:h-16 text-white shadow-lg fixed top-0 w-full z-30">
      <h1
        className={`${
          isOpen ? "hidden" : "flex"
        } md:text-3xl text-xl font-semibold text-white`}
      >
        CENTRAL
      </h1>
      <div
        className={`${
          isOpen ? "hidden" : "flex"
        } justify-center space-x-3 text-lg md:text-xl font-medium md:ms-20 ms-3`}
      >
        <NavLink to={"/"}>
          <p>Porpular</p>
        </NavLink>

        <NavLink to="/upcoming">
          <p>Upcoming</p>
        </NavLink>
      </div>
      <form
        action=""
        className={`${
          isOpen ? "flex" : "hidden md:flex"
        } items-center gap-3 border-b  py-1 px-4`}
        onSubmit={search}
      >
        <input
          type="text"
          className="bg-transparent border-0 rounded-full outline-none border-slate-300 px-4"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-6" />
        </button>
      </form>
      <button
        className={`${isOpen ? "hidden" : "flex md:hidden"} ms-3`}
        onClick={searchHandle}
      >
        <MagnifyingGlassIcon className="w-6" />
      </button>
      {/* test */}
    </nav>
  );
}
