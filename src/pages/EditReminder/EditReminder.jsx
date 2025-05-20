import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchReminderById } from "../../services/ReminderServices";
import { toast } from "react-toastify";
import axios from "axios";
import LoaderIcon from "../LoaderIcon";
import ServerError from "../Errors/ServerError";

export default function EditReminder() {
  const navigate = useNavigate();
  const { reminderId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (reminderId) {
      fetchReminderById(setFormData, setLoading, setError, reminderId);
    }
  }, [reminderId]);

  const handleEditReminder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/reminder/${reminderId}`,
        formData,
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Reminder updated successfully!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error(err.response.data.message, {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else if (err.response && err.response.status === 400) {
        toast.error(err.response.data.message, {
          hideProgressBar: false,
          autoClose: 2000,
        });
      } else if (err.response && err.response.status === 404) {
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
        console.log("ERROR WHILE EDITING REMINDER", err);
        toast.error("Failed to edit reminder!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      }
    }
  };

  if (loading) return <LoaderIcon />;
  if (error) return <ServerError />;
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form
            onSubmit={handleEditReminder}
            className="rounded-md shadow-md p-3 sm:p-4 md:p-5 text-subheading-gray"
          >
            <h1 className="mb-5 text-center text-2xl font-bold text-gray">
              Edit Reminder
            </h1>
            <div className="mb-5">
              <label htmlFor="title" className="mb-3 block">
                Title
              </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
                placeholder="Event title"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Title cannot be empty!!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
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
            <div className="mb-5">
              <label htmlFor="description" className="mb-3 block">
                Description
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                placeholder="Event description"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Description cannot be empty!!")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
                value={formData.description}
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
            {/* <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="date" className="mb-3 block">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label htmlFor="time" className="mb-3 block">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
                  />
                </div>
              </div>
            </div> */}
            <div className="mb-5">
              <label htmlFor="title" className="mb-3 block">
                Date & Time
              </label>
              <input
                type="datetime-local"
                name="date"
                onChange={handleChange}
                value={formData.date}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Please specify the date and time!!"
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
                required
                className="text-sm w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 outline-none focus:border-primary-indigo focus:shadow-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-[100%] rounded-md bg-primary-indigo py-3 px-8 text-center font-semibold text-white outline-none"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
