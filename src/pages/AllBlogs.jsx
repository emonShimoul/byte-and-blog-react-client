import React from "react";
import useAuth from "../hooks/useAuth";

const AllBlogs = () => {
  const { user } = useAuth();
  // console.log(user);

  return (
    <div>
      <h2>All Blogs</h2>
      <p>User: {user?.displayName}</p>
    </div>
  );
};

export default AllBlogs;
