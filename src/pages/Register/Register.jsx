import React from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="bg-white m-auto shadow-md rounded-lg p-10 flex flex-col gap-5 mt-[3%]">
        <div id="welcome" className="flex flex-col gap-2 flex-grow">
          <img
            src="/logo.svg
            "
            alt=""
            className="max-w-[109px] h-auto"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-2xl text-gray">Sign Up</span>
            <span className="text-sm text-[#6B7280]">
              Crete an account to start managing your events.
            </span>
          </div>
        </div>
        <div id="form" className="flex-grow">
          {/* <form action="" className="flex flex-col">
            <div>

            </div>
          </form> */}

          <form class="max-w-sm mx-auto flex flex-col">
            <div className="grid md:grid-cols-2 md:gap-5">
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm text-subheading-gray"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="base-input"
                  placeholder="First Name"
                  pattern="^[A-Za-z]+$"
                  required
                  title="First name should only contain letters."
                  class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
                />
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm text-subheading-gray"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="base-input"
                  placeholder="Last Name"
                  pattern="^[A-Za-z]+$"
                  required
                  title="First name should only contain letters."
                  class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
                />
              </div>
            </div>
            <div class="mb-5">
              <label
                for="base-input"
                class="block mb-2 text-sm text-subheading-gray"
              >
                Email
              </label>
              <input
                type="email"
                id="base-input"
                placeholder="you@example.com"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-5">
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm text-subheading-gray"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  id="base-input"
                  minLength={8}
                  required
                  placeholder="Create a new password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                  class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
                />
              </div>
              <div class="mb-5">
                <label
                  for="base-input"
                  class="block mb-2 text-sm text-subheading-gray"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="base-input"
                  minLength={8}
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                  placeholder="Enter the same password"
                  class="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
                />
              </div>
            </div>
            <div className="flex-grow">
              <button
                type="submit"
                class="text-white bg-primary-indigo hover:bg-[#443fa8] duration-150 rounded-lg w-full py-3.5 text-center"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div id="options" className="flex flex-col items-center gap-4">
          <span className="text-[#6B7280] text-sm">or</span>
          <span className="text-[#6B7280]">
            <span>Already have an account? </span>
            <NavLink to="/sign-in">
              <span className="text-primary-indigo">Sign In</span>
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
}
