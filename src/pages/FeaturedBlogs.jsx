import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featured-blogs")
      .then((res) => res.json())
      .then((data) => setFeaturedBlogs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Featured Blogs</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">#</th>
              <th className="border p-2 text-left">Title</th>
              <th className="border p-2 text-left">Image</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Short Description</th>
            </tr>
          </thead>
          <tbody>
            {featuredBlogs.map((blog, index) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2 text-blue-600 font-medium underline">
                  <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                </td>
                <td className="border p-2">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>
                <td className="border p-2">{blog.category}</td>
                <td className="border p-2">{blog.shortDesc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
