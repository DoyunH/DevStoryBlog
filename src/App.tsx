import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold">DevStory Blog</p>
        <Link to="/about">
          <button className="bg-green-400 px-3 mt-5 rounded-lg text-lg">
            Shadow DOM
          </button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
