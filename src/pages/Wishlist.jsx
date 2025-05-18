import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Wishlist = () => {
  const { user } = useAuth();
  const [wishlistBlogs, setWishlistBlogs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://byte-and-blog-node-server.onrender.com/wishlist/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setWishlistBlogs(data));
    }
  }, [user?.email]);

  const handleRemove = async (wishlistId) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    });

    if (!confirmResult.isConfirmed) return;

    const res = await fetch(
      `https://byte-and-blog-node-server.onrender.com/wishlist/${wishlistId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      setWishlistBlogs((prev) =>
        prev.filter((item) => item._id !== wishlistId)
      );

      Swal.fire({
        title: "Removed!",
        text: "The blog has been removed from your wishlist.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire("Error!", "Something went wrong. Try again.", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>

      {wishlistBlogs.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">#</th>
                <th className="border p-2 text-left">Title</th>
                <th className="border p-2 text-left">Image</th>
                <th className="border p-2 text-left">Category</th>
                <th className="border p-2 text-left">Short Description</th>
                <th className="border p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlistBlogs.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2 text-blue-600 underline">
                    <Link to={`/blog/${item.blogId}`}>{item.title}</Link>
                  </td>
                  <td className="border p-2">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">{item.shortDesc}</td>
                  <td className="border p-2 space-x-2">
                    <Link to={`/blog/${item.blogId}`}>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded">
                        Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
