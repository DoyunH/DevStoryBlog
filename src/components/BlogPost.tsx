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
    <div
      className={`max-w-2xl mx-auto  rounded-xl shadow-md text-slate-900 border-slate-900 border-2 overflow-hidden p-8 transition ease-in-out delay-100  hover:-translate-y-0 hover:bg-white hover:shadow-xl duration-300`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-6">
        By {author} - {date}
      </p>
      <p className="text-base text-gray-700">{content}</p>
    </div>
  );
};

export default BlogPost;
