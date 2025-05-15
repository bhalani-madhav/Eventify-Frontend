import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing/Landing";
import Header from "../../layouts/components/Header";
import LandingLayout from "../../layouts/LandingLayout";
import SignIn from "../pages/SignIn/SignIn";

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
]);
