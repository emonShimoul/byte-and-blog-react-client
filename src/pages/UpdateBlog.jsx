import React from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>This is update blog: {id}</h2>
    </div>
  );
};

export default UpdateBlog;
