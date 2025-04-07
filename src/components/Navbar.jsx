import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  const navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addBlog">Add Blog</Link>
      </li>
      <li>
        <Link to="/allBlogs">All Blogs</Link>
      </li>
      <li>
        <Link to="/featuredBlogs">Featured Blogs</Link>
      </li>
      <li>
        <Link to="/">Wishlist</Link>
      </li>

      {user && user?.email ? (
        // Show Profile Picture & Logout Button when user is logged in
        <>
          <li>
            <img
              src={user?.photoURL}
              alt="User"
              className="w-14 rounded-full cursor-pointer"
              title={user?.displayName}
            />
          </li>
          <li className="flex justify-center items-center">
            <button
              // onClick={""}
              className="btn btn-sm btn-warning text-black font-semibold"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login" className="lg:ms-6 underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="underline">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md container mx-auto flex justify-between items-center">
      {/* Logo or Site Name */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Byte & Blog
        </Link>
      </div>

      {/* Hamburger Menu for Mobile & Tablet */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
      </div>

      {/* Horizontal Menu for Desktop & Tablet (md and up) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2 flex items-center">
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
