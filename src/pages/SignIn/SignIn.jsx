import React from "react";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className="bg-white m-auto shadow-md rounded-lg p-10 flex flex-col gap-5 mt-[5%]">
        <div id="welcome" className="flex flex-col gap-2 flex-grow">
          <img
            src="/logo.svg
            "
            alt=""
            className="max-w-[109px] h-auto"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-2xl text-gray">Sign In</span>
            <span className="text-sm text-[#6B7280]">
              Welcome back! Please enter your login credentials.
            </span>
          </div>
        </div>
        <div id="form" className="flex-grow">
          {/* <form action="" className="flex flex-col">
            <div>

            </div>
          </form> */}

          <form class="max-w-sm mx-auto flex flex-col">
            <div class="mb-5">
              <label
                for="base-input"
                class="block mb-2 text-sm text-subheading-gray"
              >
                Email
              </label>
              <input
                type="text"
                id="base-input"
                placeholder="you@example.com"
                class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
            </div>
            <div class="mb-5">
              <label
                for="base-input"
                class="block mb-2 text-sm text-subheading-gray"
              >
                Password
              </label>
              <input
                type="password"
                id="base-input"
                placeholder="Your password here"
                class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
              <a className="text-xs text-primary-indigo underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex-grow">
              <button
                type="submit"
                class="text-white bg-primary-indigo hover:bg-[#443fa8] duration-150 rounded-lg w-full py-3.5 text-center"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div id="options" className="flex flex-col items-center gap-4">
          <span className="text-[#6B7280] text-sm">or</span>
          <span className="text-[#6B7280]">
            <span>Don't have an account? </span>
            <NavLink to="/register"><span className="text-primary-indigo">Sign Up</span></NavLink>
          </span>
        </div>
      </div>
    </>
  );
}
