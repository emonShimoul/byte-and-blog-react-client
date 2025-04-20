import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      const res = await fetch("http://localhost:5000/recentBlogs");
      const data = await res.json();
      setRecentBlogs(data);
    };

    fetchRecentBlogs();
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 opacity-30 blur-3xl rounded-full animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-700 opacity-30 blur-3xl rounded-full animate-pulse delay-1000 -z-10" />

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-indigo-400">Byte & Blog</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Explore tech insights, dev tips & inspiring stories crafted for
          curious minds.
        </p>
      </section>

      {/* Recent Blogs */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recentBlogs.map((blog) => (
            <div
              key={blog._id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
              <p className="text-gray-700 mb-4">{blog.shortDesc}</p>
              <div className="flex justify-between">
                <Link
                  to={`/blog/${blog._id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Details
                </Link>
                <button className="text-red-500 hover:underline">
                  Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentBlogs;
