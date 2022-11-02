import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#4D49BF] lg:px-[100px]">
      <div className="container mx-auto">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/topics"}>Topics</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-semibold text-[#ffff00]">
            Analyzent
          </Link>
        </div>
        <div className="navbar-center ml-auto hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/topics"}>Topics</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:w-auto text-right">
          <button className="bg-white text-black px-6 py-2">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
