import React from "react";
import SearchInput from "./components/SearchInput";

export default function Reminders() {
  return (
    <>
      <div className="flex flex-col flex-wrap py-10 px-14 text-gray gap-7">
        <div id="first" className="flex-grow flex flex-col gap-9">
          <div>
            <span className="font-bold text-3xl">Your Reminders</span>
          </div>
          <div className="flex flex-row justify-evenly gap-40  items-center">
            <SearchInput />
            <div
              id="filter"
              className="flex flex-grow flex-row flex-wrap gap-4 items-center"
            >
              <button className="px-9 py-4 border-[#D1D5DB] border-1  text-gray duration-150  hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF] rounded-lg  flex-grow">
                All Reminders
              </button>
              <button className="px-9 py-4 border-[#D1D5DB] border-1  text-gray duration-150  hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF] rounded-lg  flex-grow">
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
