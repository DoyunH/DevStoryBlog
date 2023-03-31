import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="flex items-center justify-center py-3 border-b-2">
        <img src={logo} className="w-10" alt="logo" />
        <p className="text-2xl font-semibold mr-10">DevStoryBlog</p>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shadowdom" element={<ShadowDom />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <>
      <Link to="/shadowdom">
        <button className="bg-green-400 rounded-lg text-sm">Shadow DOM</button>
      </Link>
    </>
  );
}

function ShadowDom() {
  return (
    <>
      <Link to="/">
        <button className="bg-green-400 rounded-lg text-sm">Home</button>
      </Link>
    </>
  );
}

export default App;
