import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <nav className="flex items-center justify-center lg:justify-start lg:pl-5 py-3 border-slate-900 border-b-2">
        <Link to="/DevStoryBlog" className="flex items-center">
          <img src={logo} className="w-10" alt="logo" />
          <p className="text-xl font-noto font-[500] mr-10">DevStoryBlog</p>
        </Link>
      </nav>
      <div className="mt-5 mx-10">
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
