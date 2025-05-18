import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddBlog = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Education"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const shortDesc = form.shortDesc.value;
    const longDesc = form.longDesc.value;
    const blogEmail = user?.email;

    const newBlog = {
      title,
      imageUrl,
      category,
      shortDesc,
      longDesc,
      blogEmail,
    };

    fetch("https://byte-and-blog-node-server.onrender.com/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Blog added successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/allBlogs");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Short Description
          </label>
          <textarea
            name="shortDesc"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={2}
            required
          />
        </div>

        {/* Long Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Long Description
          </label>
          <textarea
            name="longDesc"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
