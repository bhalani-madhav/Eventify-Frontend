import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SearchInput from "./components/SearchInput";
import ListItem from "./components/ListItem";
import { fetchReminders } from "../../services/ReminderServices";
import DeleteModal from "./components/DeleteModal";
import ReminderContext from "../../context/Reminder/ReminderContext";
import LoaderIcon from "../LoaderIcon";
import NoReminders from "../Errors/NoReminders";
import ServerError from "../Errors/ServerError";

export default function Reminders() {
  const [pageParams, setPageParams] = useSearchParams();
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [maxPage, setMaxPage] = useState(1);

  const {
    showDelete,
    setShowDelete,
    setSelectedReminder,
    handleCloseModal,
    showCompleted,
    handleShowCompleted,
    handleShowAll,
  } = useContext(ReminderContext);
  // Handler to open modal
  const handleDeleteClick = (reminder) => {
    setSelectedReminder(reminder);
    setShowDelete(true);
  };

  const pageNo = parseInt(pageParams.get("page")) || 1;

  useEffect(() => {
    fetchReminders(setReminders, setLoading, setError, pageNo, setMaxPage);

    console.log("HG reminders", reminders);
  }, [pageNo]);

  if (loading) return <LoaderIcon />;
  if (error) return <ServerError />;

  return (
    <>
      <div className="flex flex-col flex-wrap py-10 px-4 sm:px-6 md:px-10 lg:px-14 text-gray gap-7">
        <div id="first" className="flex-grow flex flex-col gap-9 flex-wrap">
          <div className="flex-grow">
            <span className="font-bold text-3xl">Your Reminders</span>
          </div>
          {/* <div className="flex flex-row justify-evenly gap-40  items-center flex-grow">
            <SearchInput /> */}
          <div
            id="filter"
            className="flex flex-grow flex-row flex-wrap gap-4 items-center"
          >
            <button
              onClick={handleShowAll}
              className={`px-4 py-2 sm:px-6 md:px-9 sm:py-3 md:py-4 border-[#D1D5DB] border-1  text-gray duration-150   rounded-lg  flex-grow ${
                !showCompleted
                  ? "border-primary-indigo bg-primary-indigo text-white"
                  : "hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF]"
              }`}
            >
              All Reminders
            </button>
            {/* <button className="px-4 py-2 sm:px-6 md:px-9 sm:py-3 md:py-4 border-[#D1D5DB] border-1  text-gray duration-150  hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF] rounded-lg  flex-grow">
                All Reminders
              </button> */}
            <button
              onClick={handleShowCompleted}
              className={`px-4 py-2 sm:px-6 md:px-9 sm:py-3 md:py-4 border-[#D1D5DB] border-1  text-gray duration-150   rounded-lg  flex-grow ${
                showCompleted
                  ? "border-primary-indigo bg-primary-indigo text-white"
                  : "hover:text-primary-indigo hover:bg-[#E0E7FF] hover:border-[#E0E7FF]"
              }`}
            >
              Completed
            </button>
          </div>
          {/* </div> */}
        </div>
        <div id="list" className="flex flex-col flex-wrap">
          {reminders.length === 0 && <NoReminders />}
          {(showCompleted
            ? // Show only completed reminders
              reminders.filter(
                (reminder) => new Date(reminder.date) < new Date()
              )
            : // Show only upcoming (not completed) reminders
              reminders.filter(
                (reminder) => new Date(reminder.date) >= new Date()
              )
          ).map((reminder) => {
            const newDate = new Date(reminder.date);
            const createdAt = new Date(reminder.createdAt);
            const updatedAt = new Date(reminder.updatedAt);
            return (
              <ListItem
                key={reminder.id}
                id={reminder.id}
                title={reminder.title}
                description={reminder.description}
                date={newDate.toLocaleDateString()}
                time={newDate.toLocaleTimeString()}
                creaytedAt={createdAt.toLocaleDateString()}
                updatedAt={updatedAt.toLocaleDateString()}
                onDelete={() => handleDeleteClick(reminder)}
              />
            );
          })}
        </div>
        {/* Render DeleteModal */}
        {showDelete && (
          <DeleteModal
            onClose={() => {
              handleCloseModal();
              fetchReminders(
                setReminders,
                setLoading,
                setError,
                pageNo,
                setMaxPage
              );
            }}
          />
        )}
        <div
          id="pagination"
          className={`flex flex-row justify-between ${
            reminders.length === 0 ? "hidden" : ""
          } `}
        >
          <button
            onClick={() => {
              setPageParams({ page: pageNo - 1 });
            }}
            className={`disabled:cursor-not-allowed px-4 py-2 sm:px-6 md:px-9 sm:py-3 md:py-4 border-[#E0E7FF] border-1  text-primary-indigo duration-150 hover:bg-primary-indigo  hover:text-white bg-[#E0E7FF] hover:border-primary-indigo rounded-lg  flex-grow`}
            disabled={pageNo === 1}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setPageParams({ page: pageNo + 1 });
            }}
            className={`disabled:cursor-not-allowed px-4 py-2 sm:px-6 md:px-9 sm:py-3 md:py-4 border-[#E0E7FF] border-1  text-primary-indigo duration-150 hover:bg-primary-indigo  hover:text-white bg-[#E0E7FF] hover:border-primary-indigo rounded-lg  flex-grow`}
            disabled={pageNo === maxPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
