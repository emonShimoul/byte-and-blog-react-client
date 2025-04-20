import Swal from "sweetalert2";

export const handleWishlist = async (blogId, userEmail) => {
  if (!userEmail) {
    Swal.fire({
      icon: "warning",
      title: "Not Logged In",
      text: "Please log in to add to wishlist.",
    });
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blogId, userEmail }),
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        title: "Success",
        text: "Blog added to wishlist!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: data.message || "This blog is already in your wishlist!",
      });
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try again.",
    });
  }
};
