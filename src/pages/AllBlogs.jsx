import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { handleWishlist } from "../utils/wishlist";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();

  const [categories, setCategories] = useState([
    "All",
    "Technology",
    "Travel",
    "Food",
    "Lifestyle",
    "Education",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs", {
          params: {
            category: selectedCategory !== "All" ? selectedCategory : "",
            search,
          },
        });
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [selectedCategory, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by title"
          className="border px-4 py-2 rounded flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.category}</p>
              <p className="mt-2 text-gray-700 text-sm">{blog.shortDesc}</p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/blog/${blog._id}`}
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Details
                </Link>
                <button
                  onClick={() => handleWishlist(blog._id, user?.email)}
                  className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 text-sm"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
