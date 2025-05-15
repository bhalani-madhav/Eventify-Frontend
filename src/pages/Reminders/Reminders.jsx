import React from "react";
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";

export default function Reminders() {
  return (
    <>
      <div className="flex flex-col flex-wrap py-10 px-14 text-gray gap-7">
        <div id="first" className="flex-grow flex flex-col gap-9 flex-wrap">
          <div className="flex-grow">
            <span className="font-bold text-3xl">Your Reminders</span>
          </div>
          <div className="flex flex-row justify-evenly gap-40  items-center flex-grow">
            <SearchInput />
            <div
              id="filter"
              className="flex flex-grow flex-row flex-wrap gap-4 items-center"
            >
              <button className="px-9 py-4 border-primary-indigo border-1 bg-primary-indigo  duration-150 text-white   rounded-lg  flex-grow">
                All Reminders
              </button>
              {/* <button className="px-9 py-4 border-[#D1D5DB] border-1  text-gray duration-150  hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF] rounded-lg  flex-grow">
                All Reminders
              </button> */}
              <button className="px-9 py-4 border-[#D1D5DB] border-1  text-gray duration-150  hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF] rounded-lg  flex-grow">
                Completed
              </button>
            </div>
          </div>
        </div>
        <div id="list" className="flex flex-col flex-wrap">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <div id="pagination" className="flex flex-row justify-between">
          <button className="px-9 py-4 border-[#E0E7FF] border-1  text-primary-indigo duration-150 max-w-[150px] hover:bg-primary-indigo  hover:text-white bg-[#E0E7FF] hover:border-primary-indigo rounded-lg  flex-grow">
            Previous
          </button>
          <button className="px-9 py-4 border-[#E0E7FF] border-1  text-primary-indigo duration-150 max-w-[150px] hover:bg-primary-indigo  hover:text-white bg-[#E0E7FF] hover:border-primary-indigo rounded-lg  flex-grow">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
