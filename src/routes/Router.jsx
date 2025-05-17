import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing/Landing";
import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import SignIn from "../pages/SignIn/SignIn";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Reminders from "../pages/Reminders/Reminders";
import NewReminder from "../pages/NewReminder/NewReminder";
import EditReminder from "../pages/EditReminder/EditReminder";
import ProtectedRoute from "./ProtectedRoute";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Reminders />,
      },
      {
        path: "/dashboard/new-reminder",
        element: <NewReminder />,
      },
      {
        path: "/dashboard/edit-reminder",
        element: <EditReminder />,
      },
    ],
  },
]);
