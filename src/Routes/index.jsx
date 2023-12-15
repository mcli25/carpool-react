import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CarOwnerPage from "../pages/CarOwnerPage";
import Home from "../components/Home";
import ProfilePage from "../pages/ProfilePage";
import BookPage from "../pages/BookPage";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import { Publish } from "@mui/icons-material";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    path: "/carowner",
    element: <CarOwnerPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },

  {
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);
