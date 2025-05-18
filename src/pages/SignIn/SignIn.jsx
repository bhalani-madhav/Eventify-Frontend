import React, { useRef, useContext } from "react";
import UserContext from "../../context/User/UserContext";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const { setUsername, setIsLoggedIn } = useContext(UserContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email: email.current.value, password: password.current.value },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("Logged in successfully!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        setUsername(response.data.firstName + " " + response.data.lastName);
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error(err.response.data.message, {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else if (err.response && err.response.status === 401) {
        toast.error(err.response.data.message, {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else if (err.response && err.response.status === 500) {
        toast.error(err.response.data.message, {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else {
        console.log("ERROR WHILE SIGNING IN", err);
        toast.error("Something went wrong!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      }
    }
  };

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

          <form
            className="max-w-sm mx-auto flex flex-col"
            onSubmit={handleSignIn}
          >
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm text-subheading-gray"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                ref={email}
                id="email"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Email cannot be empty!!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                placeholder="you@example.com"
                className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm text-subheading-gray"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                ref={password}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Password cannot be empty!!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                name="password"
                placeholder="Your password here"
                className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
              <a className="text-xs text-primary-indigo underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex-grow">
              <button
                type="submit"
                className="text-white bg-primary-indigo hover:bg-[#443fa8] duration-150 rounded-lg w-full py-3.5 text-center"
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
            <NavLink to="/register">
              <span className="text-primary-indigo">Sign Up</span>
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
}
