import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PublishPage from "../pages/PublishPage";
import Home from "../components/Home";
import ProfilePage from "../pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
  },
  {
    path: "/publish",
    element: <PublishPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
