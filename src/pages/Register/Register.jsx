import React, { useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  // const notify = () => toast.success("User registered successfully!",{hideProgressBar:true,autoClose:2000});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [error,setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Both passwords should be same!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else {
        const response = await axios.post(
          "http://localhost:3000/register",
          formData
        );

        if (response.status === 201) {
          toast.success("User registered successfully!", {
            hideProgressBar: false,
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/sign-in");
          }, 2000);
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
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
        console.log("ERROR WHILE SIGNING UP", err);
        toast.error("Something went wrong!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <>
      <div className="bg-white m-auto shadow-md rounded-lg p-10 flex flex-col gap-5 mt-3">
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

          <form
            className="max-w-sm mx-auto flex flex-col"
            onSubmit={handleSignUp}
          >
            <div className="grid md:grid-cols-2 md:gap-5">
              <div className="mb-3">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm text-subheading-gray"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  pattern="^[A-Za-z]+$"
                  required
                  title="First name should only contain letters."
                  className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm text-subheading-gray"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  pattern="^[A-Za-z]+$"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  title="First name should only contain letters."
                  className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-subheading-gray"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                placeholder="you@example.com"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
            </div>
            {/* <div className="grid md:grid-cols-2 md:gap-5"> */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-subheading-gray"
              >
                Create Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
                placeholder="Create a new password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm text-subheading-gray"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={8}
                name="confirmPassword"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
                placeholder="Enter the same password"
                className="bg-white border-1 placeholder:text-xs  border-[#D1D5DB] text-gray-900 text-sm rounded-lg focus:border-primary-indigo focus:outline-none focus:border-2  focus:ring-primary-indigo  block w-full p-2.5"
              />
            </div>
            {/* </div> */}
            {/* <div className="mb-3">
              <p className="text-primary-indigo text-xs">
                Show password
              </p>
            </div> */}
            <div className="flex-grow">
              <button
                type="submit"
                className="text-white bg-primary-indigo hover:bg-[#443fa8] duration-150 rounded-lg w-full py-3.5 text-center"
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
      <ToastContainer />
    </>
  );
}
