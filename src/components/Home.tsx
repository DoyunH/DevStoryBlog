import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-10">
      <Link to="/post/1">
        <div className="my-5 px-5 py-7 border-slate-900 border-2 rounded-lg bg-[#f8C44c] transition ease-in-out delay-100  hover:-translate-y-0 hover:bg-white hover:shadow-xl duration-300">
          <h1 className="text-2xl font-semibold italic text-slate-900 text-center mb-3">
            ¿Qué es DataDog?
          </h1>
          <p className="text-sm text-slate-800 font-nanum">¿Qué es DataDog?</p>
        </div>
      </Link>
      <Link to="/post/2">
        <div className="my-5 px-5 py-7 border-slate-900 border-2 rounded-lg bg-[#3ebd5c] transition ease-in-out delay-100  hover:-translate-y-0 hover:shadow-xl hover:bg-white  duration-300">
          <h1 className="text-2xl font-semibold italic text-slate-900 text-center mb-3">
            Shadow DOM 이란?
          </h1>
          <p className="text-sm font-nanum">Shadow DOM이란 무엇일까요? ...</p>
        </div>
      </Link>
      <Link to="/post/3">
        <div className="my-5 px-5 py-7 border-slate-900 border-2 rounded-lg bg-[#428fff] transition ease-in-out delay-100  hover:-translate-y-0 hover:shadow-xl hover:bg-white  duration-300">
          <h1 className="text-2xl font-semibold italic text-slate-900 text-center mb-3">
            Shadow DOM 이란?
          </h1>
          <p className="text-sm font-nanum">Shadow DOM이란 무엇일까요? ...</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
