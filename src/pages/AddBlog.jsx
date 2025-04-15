const AddBlog = () => {
  const categories = ["Technology", "Travel", "Food", "Lifestyle", "Education"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted..");
    // You can replace this with an API call
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
