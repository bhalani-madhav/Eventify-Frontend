import React from "react";

export default function SearchInput() {
  return (
    <>
      <form class="max-w-md mx-auto flex-grow">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 border-[#D1D5DB] text-sm border focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo   rounded-lg bg-white"
            placeholder="Search"
            required
          />
          {/* <button
                  type="submit"
                  class="absolute end-2.5 bottom-2.5 text-white bg-primary-indigo hover:bg-[#E0E7FF] hover:text-primary-indigo duration-150 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button> */}
        </div>
      </form>
    </>
  );
}
