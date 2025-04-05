import React from "react";
import useAuth from "../hooks/useAuth";

const AllBlogs = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>All Blogs</h2>
      <p>User: {user}</p>
    </div>
  );
};

export default AllBlogs;
