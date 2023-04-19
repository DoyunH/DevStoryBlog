import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/post/1">
        <div className="mx-10 my-5 px-5 py-7 border-black border-[0px] rounded-lg bg-[#f8C44c] shadow-md transition ease-in-out delay-100  hover:-translate-y-0 hover:scale-105 hover: duration-300">
          <h1 className="text-2xl  font-[300]">Shadow DOM 이란?</h1>
          <p className="text-sm font-nanum">Shadow DOM이란 무엇일까요? ...</p>
        </div>
      </Link>
      <Link to="/post/2">
        <div className="mx-10 my-5 px-5 py-7 border-black border-[0px] rounded-lg bg-[#3ebd5c] shadow-md transition ease-in-out delay-100  hover:-translate-y-0 hover:scale-105 hover: duration-300">
          <h1 className="text-lg font-[300]">Shadow DOM 이란?</h1>
          <p className="text-sm font-nanum">Shadow DOM이란 무엇일까요? ...</p>
        </div>
      </Link>
      <Link to="/post/3">
        <div className="mx-10 my-5 px-5 py-7 border-black border-[0px] rounded-lg bg-[#428fff] shadow-md transition ease-in-out delay-100  hover:-translate-y-0 hover:scale-105 hover: duration-300">
          <h1 className="text-lg font-[300]">Shadow DOM 이란?</h1>
          <p className="text-sm font-nanum">Shadow DOM이란 무엇일까요? ...</p>
        </div>
      </Link>
    </>
  );
};

export default Home;
