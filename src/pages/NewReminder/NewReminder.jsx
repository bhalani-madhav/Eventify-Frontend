import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewReminder() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [invalidTitle, setInvalidTitle] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      // Check for title length if the field is 'title'
      if (name === "title") {
        setInvalidTitle(value.length > 100);
      }
      if (name === "description") {
        setInvalidDescription(value.length > 500);
      }
      return { ...prevFormData, [name]: value };
    });
  };

  const handleAddReminder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/reminder",
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Reminder created successfully!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
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
        console.log("ERROR WHILE ADDING REMINDER", err);
        toast.error("Failed to add reminder!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <>
      <div class="flex items-center justify-center min-h-screen p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form
            onSubmit={handleAddReminder}
            className="rounded-md shadow-md p-5 text-subheading-gray"
          >
            <h1 class="mb-5 text-center text-2xl font-bold text-gray">
              New Reminder
            </h1>
            <div class="mb-5">
              <label htmlFor="title" class="mb-3 block">
                Title
              </label>
              <input
                type="text"
                placeholder="Event title"
                name="title"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Title cannot be empty!!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                onChange={handleChange}
                class={`text-sm w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md ${
                  invalidTitle ? "focus:border-red-600" : ""
                }`}
              />
              {invalidTitle ? (
                <p className="text-red-600 text-sm">
                  Title must be between 0 to 100 characters.
                </p>
              ) : (
                ""
              )}
            </div>
            <div class="mb-5">
              <label htmlFor="description" class="mb-3 block">
                Description
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("Description cannot be empty!!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                placeholder="Event description"
                class={` ${
                  invalidDescription ? "focus:border-red-600" : ""
                } text-sm w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md`}
              ></textarea>
              {invalidDescription ? (
                <p className="text-red-600 text-sm">
                  Description must be between 0 to 500 characters.
                </p>
              ) : (
                ""
              )}
            </div>
            <div class="mb-5">
              <label htmlFor="title" class="mb-3 block">
                Date & Time
              </label>
              <input
                type="datetime-local"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Please specify the date and time!!"
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                name="date"
                onChange={handleChange}
                class="text-sm w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
              />
            </div>
            <div>
              <button
                type="submit"
                class="hover:shadow-form w-[100%] rounded-md bg-primary-indigo py-3 px-8 text-center font-semibold text-white outline-none"
              >
                Add reminder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
