import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const BlogDetails = () => {
  const { user } = useAuth();
  const blogInfo = useLoaderData();
  const navigate = useNavigate();
  console.log(blogInfo);

  return <div>This is Blog Details for: {user?.displayName}</div>;
};

export default BlogDetails;
