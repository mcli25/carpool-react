import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CarOwnerPage from "../pages/CarOwnerPage";
import BookPage from "../pages/BookPage";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
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
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);
