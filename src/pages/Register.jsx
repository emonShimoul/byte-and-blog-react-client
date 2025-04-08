import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser, updatedUserProfile, setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      setError({
        ...error,
        passwordError:
          "Password must have an Uppercase, a Lowercase and at least 6 characters!!",
      });
      return;
    }
    // console.log(name, email, photo, password);

    createNewUser(email, password)
      .then((result) => {
        const createdAt = result.user?.metadata?.creationTime;
        const user = result.user;
        const dbUserInfo = { name, email, photo, createdAt };
        setUser(user);

        // update user profile in the firebase
        updatedUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            setError({ ...error, register: err.message });
          });

        // save new user info to db
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dbUserInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User created successfully!!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((err) => {
        setError({ ...error, register: err.message });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-1/2 px-12 py-6 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md my-4">
        {/* Logo / Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              placeholder="Enter photo URL"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <span>An Uppercase, a Lowercase and at least 6 characters.</span>
            {error.passwordError && (
              <label
                htmlFor=""
                className="label text-sm text-red-500 font-bold mt-4"
              >
                {error.passwordError}
              </label>
            )}
          </div>

          {/* Register Button */}
          <input
            type="submit"
            value="Register"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          />
        </form>

        {/* Already have an account? */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
