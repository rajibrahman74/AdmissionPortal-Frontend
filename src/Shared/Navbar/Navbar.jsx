import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/admission-portal logo.png"

const Navbar = () => {
  return (
    <>
      <nav className="bg-white text-black">
        <div className="container flex flex-col items-center p-6 mx-auto">
            <img
              className="w-64"
              src={logo}
              alt=""
            />
          <div className="flex items-center justify-center mt-6 text-sm md:text-base">
            <Link
              to="/"
              className="mx-2  border-b-2 border-blue-500  sm:mx-6"
            >
              Home
            </Link>
            <Link
              to="collages"
              className="mx-2 border-b-2 border-transparent hover:  hover:border-blue-500 sm:mx-6"
            >
              Collages
            </Link>
            <Link
              to="admission"
              className="mx-2 border-b-2 border-transparent hover:  hover:border-blue-500 sm:mx-6"
            >
              Admission
            </Link>
            <Link
              to="my-collage"
              className="mx-2 border-b-2 border-transparent hover:  hover:border-blue-500 sm:mx-6"
            >
              My College
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;