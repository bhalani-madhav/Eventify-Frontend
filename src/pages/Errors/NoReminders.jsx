import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function NoReminders({message}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <span className="text-lg font-semibold mb-4">No reminders found</span>
      <button
        className="px-6 py-3 rounded-lg text-white font-medium bg-primary-indigo hover:bg-indigo-700"
        onClick={() => navigate("/dashboard/new-reminder")}
      >
        {message}
      </button>
    </div>
  );
}
