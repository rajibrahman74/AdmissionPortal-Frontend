import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/admission-portal logo.png"; // Import your CSS file with the active-link class
import "../../../src/index.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white text-black">
        <div className="container flex flex-col items-center p-6 mx-auto">
          <img className="w-64" src={logo} alt="" />
          <div className="flex items-center justify-center flex-wrap mt-6 text-sm md:text-base gap-y-2">
            <NavLink
              exact
              to="/"
              activeClassName="active-link"
              className="mx-2 border-b-2 border-transparent hover:border-blue-500 sm:mx-6"
            >
              Home
            </NavLink>
            <NavLink
              to="/collages"
              activeClassName="active-link"
              className="mx-2 border-b-2 border-transparent hover:border-blue-500 sm:mx-6"
            >
              Collages
            </NavLink>
            <NavLink
              to="/admission"
              activeClassName="active-link"
              className="mx-2 border-b-2 border-transparent hover:border-blue-500 sm:mx-6"
            >
              Admission
            </NavLink>
            <NavLink
              to="/my-college"
              activeClassName="active-link"
              className="mx-2 border-b-2 border-transparent hover:border-blue-500 sm:mx-6"
            >
              My College
            </NavLink>
            <NavLink
              to="/signup"
              activeClassName="active-link"
              className="mx-2 border-b-2 border-transparent hover:border-blue-500 sm:mx-6"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
