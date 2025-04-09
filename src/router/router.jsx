import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import Home from "../components/Home";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featuredBlogs",
        element: (
          <PrivateRoute>
            <FeaturedBlogs></FeaturedBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
