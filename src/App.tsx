import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/PostItem";
import { useState } from "react";
import PostContent from "./components/PostContent";

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
      <div className="mt-5 mx-5 md:mx-10 lg:mx-14">
        {menuOn && (
          <ul className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 bg-white shadow-2xl w-screen border-black border-b-2 pb-5">
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="inline-block mr-5">
              <Link to="/DevStoryBlog" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
        <Routes>
          <Route path="/DevStoryBlog" element={<Home />} />
          <Route
            path="/post/:postID"
            element={
              <PostContent
                title="Sample Blog Post"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus nibh velit, et tempus purus scelerisque vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sagittis vehicula sapien, sit amet feugiat metus ullamcorper at. Donec turpis mauris, mollis sed mollis at, condimentum nec mauris. Pellentesque tempor euismod faucibus. Maecenas sit amet lobortis eros. Praesent in feugiat nisi, at semper lorem. Nunc eros lorem, viverra eu tortor ut, pharetra gravida diam. Suspendisse ex orci, tristique quis libero vel, gravida pulvinar mi. Proin congue tortor vitae congue porta. Mauris vitae sem id odio accumsan tempor sed sit amet eros. Donec vulputate augue nec dictum posuere. Vestibulum feugiat ipsum at vehicula lobortis. Maecenas interdum tortor sapien, vel auctor nunc volutpat eget. Morbi commodo convallis sem vel egestas. Proin consectetur erat ultrices interdum egestas.

Curabitur cursus tellus metus, et scelerisque magna eleifend euismod. Aliquam ac justo semper, tristique metus eget, tempus metus. Nullam sit amet nunc eu nunc dapibus lobortis id in quam. Fusce vitae sagittis mi. Nulla suscipit faucibus ex, vitae faucibus quam pellentesque vitae. Sed ultrices augue quis porta finibus. Duis gravida tempus massa hendrerit vehicula. Praesent porttitor vel orci at tempus. Phasellus malesuada, nisi a laoreet egestas, risus lacus scelerisque justo, a pellentesque felis sem vel neque. Nullam accumsan magna in dolor porttitor, eu iaculis nunc lacinia. Sed cursus cursus urna, vehicula semper diam dapibus id. Donec sit amet porttitor nisi.

Aliquam id tempor orci, vitae consectetur urna. Phasellus vel pretium justo. Integer imperdiet nisl tempor hendrerit tincidunt. Praesent bibendum mauris lacus, a faucibus dolor pretium sit amet. Pellentesque sagittis arcu ac lobortis facilisis. Ut risus orci, finibus ac porttitor ac, rhoncus in tortor. Aenean eu elit diam. Phasellus nec erat dui. Aenean efficitur sodales risus quis vulputate. Maecenas feugiat tristique diam sit amet venenatis. Sed mollis mauris nec sapien consequat tincidunt. Nulla commodo velit neque, ut porta sapien sollicitudin sed. Duis arcu lacus, pulvinar eget arcu non, feugiat scelerisque purus. Donec sit amet magna in nunc posuere sodales.

Sed quis vehicula lorem. Nam molestie ex massa, non congue justo finibus eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eleifend efficitur tristique. Cras consequat suscipit arcu, ut condimentum lorem ultrices at. Nunc ullamcorper auctor velit a pretium. Proin scelerisque, eros ut euismod volutpat, libero ligula consequat sapien, vel gravida mi massa eget quam. Suspendisse augue justo, dignissim et ultricies sed, pulvinar eu leo. Cras id dui diam. Sed luctus sem in odio porta, a commodo neque tincidunt."
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
