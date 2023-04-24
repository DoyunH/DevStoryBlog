import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  author,
  date,
}) => {
  return (
    <div className="mx-auto text-slate-900">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-6">
        By {author} - {date}
      </p>
      <p className="text-base text-gray-700">{content}</p>
    </div>
  );
};

export default BlogPost;
