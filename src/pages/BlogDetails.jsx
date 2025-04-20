import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const BlogDetails = () => {
  const { user } = useAuth();
  const blogInfo = useLoaderData();
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `https://byte-and-blog-node-server.vercel.app/comments/${blogInfo._id}`
        );
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (blogInfo?._id) {
      fetchComments();
    }
  }, [blogInfo?._id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      blogId: blogInfo._id,
      commentText,
      userName: user.displayName,
      userPhotoURL: user.photoURL,
      userEmail: user.email,
    };

    const res = await fetch(
      "https://byte-and-blog-node-server.vercel.app/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );

    if (res.ok) {
      setCommentText("");
      // Re-fetch comments
      const updated = await fetch(
        `https://byte-and-blog-node-server.vercel.app/comments/${blogInfo._id}`
      );
      const data = await updated.json();
      setComments(data);
    }
  };

  const isOwner = blogInfo?.blogEmail === user?.email;

  if (!blogInfo) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Blog Image */}
      <img
        src={blogInfo.imageUrl}
        alt={blogInfo.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      {/* Blog Info */}
      <h1 className="text-4xl font-bold mb-2">{blogInfo.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Category: {blogInfo.category}
      </p>

      {/* Short & Long Description */}
      <p className="text-md text-gray-700 mb-2 font-semibold">
        {blogInfo.shortDesc}
      </p>
      <p className="text-base text-gray-800 mb-6">{blogInfo.longDesc}</p>

      {/* Update Button for Owner */}
      {isOwner && (
        <Link to={`/updateBlog/${blogInfo._id}`}>
          <button className="mb-6 bg-green-600 text-white px-4 py-2 rounded">
            Update Blog
          </button>
        </Link>
      )}

      <hr className="my-6" />

      {/* Comments Section */}
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {isOwner ? (
        <p className="text-red-500 font-medium">
          You cannot comment on your own blog.
        </p>
      ) : (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="w-full border p-3 rounded"
            rows="3"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment here..."
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Post Comment
          </button>
        </form>
      )}

      {/* All Comments */}
      <div className="mt-6 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="border p-3 rounded-md flex gap-3 items-start"
            >
              <img
                src={comment.userPhotoURL}
                alt={comment.userName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{comment.userName}</p>
                <p>{comment.commentText}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
