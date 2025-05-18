import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import ReminderContextProvider from "../../context/Reminder/ReminderContextProvider";

export default function DashboardLayout() {
  return (
    <ReminderContextProvider>
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="flex-grow h-full bg-background-white overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </ReminderContextProvider>
  );
}
