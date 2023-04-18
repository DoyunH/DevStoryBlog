import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <Link to='/shadowdom'>
      <h1 className='text-md font-[600]'>Shadow DOM 이란?</h1>
      <p className='font-nanum'>Shadow DOM이란 무엇일까요? ...</p>
    </Link>
  );
};

export default Home;
