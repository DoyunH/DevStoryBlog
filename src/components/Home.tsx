import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "./PostItem";

const Home = () => {
  return (
    <div className="space-y-3">
      <div className="my-3">
        <Link to="/post/1">
          <BlogPost
            title="¿Qué es DataDog?"
            author="John Doe"
            date="April 19, 2023"
          />
        </Link>
      </div>
      <div className="my-3">
        <Link to="/post/2">
          <BlogPost
            title="¿Qué es DataDog?"
            author="John Doe"
            date="April 19, 2023"
          />
        </Link>
      </div>
      <div className="my-3">
        <Link to="/post/3">
          <BlogPost
            title="¿Qué es DataDog?"
            author="John Doe"
            date="April 19, 2023"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
