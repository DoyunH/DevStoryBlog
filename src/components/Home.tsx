import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "./BlogPost";

const Home = () => {
  return (
    <div className="space-y-3">
      <Link to="/post/1">
        <BlogPost
          title="¿Qué es DataDog?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ..."
          author="John Doe"
          date="April 19, 2023"
          color="#f8C44c"
        />
      </Link>
      <Link to="/post/2">
        <BlogPost
          title="¿Qué es DataDog?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ..."
          author="John Doe"
          date="April 19, 2023"
          color="#3ebd5c"
        />
      </Link>
      <Link to="/post/3">
        <BlogPost
          title="¿Qué es DataDog?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ..."
          author="John Doe"
          date="April 19, 2023"
          color="#428fff"
        />
      </Link>
    </div>
  );
};

export default Home;
