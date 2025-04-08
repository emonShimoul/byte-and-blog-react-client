import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { googleLogin, setUser, userLogin } = useAuth();
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        // update the last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Sign in data updated in the db", data);
          });

        const user = result.user;
        setUser(user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg py-2 mb-4 hover:shadow-md transition cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm text-gray-700">Continue with Google</span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Email/Password Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {error.login && (
              <p className="text-red-600 font-bold my-2">{error.login}</p>
            )}
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200  cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
