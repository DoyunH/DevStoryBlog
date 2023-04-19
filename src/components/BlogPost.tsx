import React from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Link to="/DevStoryBlog">
      <button className="bg-green-400 rounded-lg text-sm">Home</button>
    </Link>
  );
};

export default BlogPost;
