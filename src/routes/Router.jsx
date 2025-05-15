import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing/Landing";
import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import SignIn from "../pages/SignIn/SignIn";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Reminders from "../pages/Reminders/Reminders";

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
    element: <DashboardLayout/>,
    children: [{
      path: "/dashboard",
      element: <Reminders/>
    }]
  }
]);
