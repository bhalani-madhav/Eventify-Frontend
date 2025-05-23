import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ReminderContext from "../../../context/Reminder/ReminderContext";

export default function DeleteModal({ onClose }) {
  const { handleCloseModal, selectedReminder } = useContext(ReminderContext);

  const handleDelete = async (reminderId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/reminder/${reminderId}`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Reminder deleted successfully!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        onClose();
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
        console.log("ERROR WHILE DELETING REMINDER", err);
        toast.error("Failed to delete reminder!!", {
          hideProgressBar: false,
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <>
      {/* Background overlay with opacity */}
      <div
        className="fixed inset-0 z-40 bg-[#E0E7FF] opacity-70"
        aria-hidden="true"
      ></div>
      {/* Modal dialog */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
            <button
              type="button"
              className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <svg
              className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="mb-4 text-gray text-sm">
              Are you sure you want to delete{" "}
              <i className="text-primary-indigo">{selectedReminder?.title}</i>?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={onClose}
                type="button"
                className="py-2 px-3 text-sm font-medium text-primary-indigo bg-[#E0E7FF] rounded-lg border border-[#E0E7FF] hover:bg-primary-indigo hover:border-primary-indigo focus:outline-none hover:text-[#E0E7FF] focus:z-10 duration-150"
              >
                No, cancel
              </button>
              <button
                type="submit"
                onClick={() => handleDelete(selectedReminder?.id)}
                className="py-2 px-3 text-sm font-medium text-center text-red-100 bg-red-600 rounded-lg hover:bg-red-100 hover:text-red-600   duration-150"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
