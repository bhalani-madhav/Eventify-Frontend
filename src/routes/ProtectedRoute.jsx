import React, { Children, useContext } from "react";
import UserContext from "../context/User/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(UserContext);

  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to="/sign-in" replace />;
  }
}
