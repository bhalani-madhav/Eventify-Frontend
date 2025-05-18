import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavButton({ title, children, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "flex flex-row items-center text-lg gap-[18px] px-4 py-3.5 rounded-[7px] cursor-pointer text-white bg-primary-indigo"
          : "flex flex-row items-center text-lg gap-[18px] px-4 py-3.5 rounded-[7px] cursor-pointer text-gray hover:bg-[#E0E7FF] hover:text-primary-indigo duration-150"
      }
      end
    >
      {children}
      <span>{title}</span>
    </NavLink>
  );
}
