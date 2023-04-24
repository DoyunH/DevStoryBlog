import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";
import { useState } from "react";

function App() {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };
  return (
    <Router>
      <nav className="flex items-center justify-center lg:justify-around lg:pl-5 py-3 border-slate-900 border-b-2">
        <Link to="/DevStoryBlog" className="flex items-center">
          <img src={logo} className="w-10" alt="logo" />
          <p className="text-xl font-noto font-[500]">DevStoryBlog</p>
        </Link>
        <div className="absolute lg:relative right-1">
          <span
            className="lg:hidden material-symbols-outlined mr-5 mt-2"
            onClick={toggleMenu}
          >
            menu
          </span>
          <ul className="hidden lg:block">
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog">Home</Link>
            </li>
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog">About</Link>
            </li>
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-5 mx-10">
        {menuOn && (
          <ul className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 bg-white shadow-2xl w-screen border-black border-b-2 pb-5">
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog">Home</Link>
            </li>
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog">About</Link>
            </li>
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog">Contact</Link>
            </li>
          </ul>
        )}
        <Routes>
          <Route path="/DevStoryBlog" element={<Home />} />
          <Route
            path="/post/:postID"
            element={
              <BlogPost
                title="Sample Blog Post"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ..."
                author="John Doe"
                date="April 19, 2023"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
