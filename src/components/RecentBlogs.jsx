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
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Byte & Blog</h1>
        <p className="text-lg">
          Explore tech insights, dev tips & inspiring stories
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
