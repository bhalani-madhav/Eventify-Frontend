import React, { useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "../../context/User/UserContext";

export default function LandingLayout() {
  const { isLoggedIn } = useContext(UserContext);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return (
      <>
        <div className="flex flex-col gap-0">
          <Header className="px-0" />
          <Outlet />
        </div>
      </>
    );
  }
}
