import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Router.jsx";
import UserContextProvider from "./context/User/UserContextProvider.jsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.jsx";
import LandingLayout from "./layouts/LandingLayout/LandingLayout.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={Routes}>
        <App>
          <LandingLayout></LandingLayout>
          <DashboardLayout></DashboardLayout>
        </App>
      </RouterProvider>
      <ToastContainer />
    </UserContextProvider>
  </StrictMode>
);
