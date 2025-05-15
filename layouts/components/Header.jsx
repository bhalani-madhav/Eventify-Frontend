import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        id="header"
        className="flex flex-row w-[100vw] justify-between px-8 py-3 shadow-lg items-center sticky top-0"
      >
        <div id="logo">
          <NavLink to="/">
          <img src="/logo.svg" alt="" />
          </NavLink>
        </div>
        <div id="header-buttons" className="flex flex-row gap-2.5 items-center">
          <NavLink to="/sign-in">
          <button className="text-primary-indigo">Sign In</button>
          </NavLink>
          <NavLink to="/register">
            <button className="bg-primary-indigo py-2 px-7 rounded-lg text-white border-1 border-primary-indigo hover:bg-white hover:text-primary-indigo duration-150 ">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
