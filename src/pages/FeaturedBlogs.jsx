import React from "react";
import useAuth from "../hooks/useAuth";

const FeaturedBlogs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Featured Blogs</h2>
      <p>Hello, {user}</p>
    </div>
  );
};

export default FeaturedBlogs;
