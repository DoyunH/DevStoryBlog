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
                title="Enhancing Checkout Experience on WordPress Sites with Simple JavaScript Tricks"
                content="Introduction:
JavaScript is a handy tool that can make websites more interactive and user-friendly. One great example is improving the checkout process on a WordPress site. In this article, we'll explore a simple way to use JavaScript to make the checkout experience better for your customers.

Body:

Spotting the Issue:
During online shopping, customers often come across various input fields and dropdown menus in the checkout process. Sometimes, these elements lack clear placeholder text, making it confusing for users. To solve this problem, we can use JavaScript to add helpful placeholder text when specific conditions are met.

Adding Placeholder Text with JavaScript:
An easy solution is to use basic JavaScript to add placeholder text to input fields with the 'select2-search__field' class when the URL path is '/checkout/'. We can do this by using a DOMContentLoaded event listener to check the current URL path and then set up a MutationObserver to look for changes in the web page. When the right input field is found, the observer sets the placeholder attribute and then stops.

Loading Your JavaScript File in WordPress:
To apply this solution to a WordPress site, we need to load the JavaScript file correctly. This involves adding a function in the functions.php file that enqueues the script using the wp_enqueue_script() function. Then, we use the add_action() function with the 'wp_enqueue_scripts' hook to make sure the script is loaded properly.

Reacting to User Clicks:
In some cases, we might want to add the placeholder text only when the user clicks on a specific element. To do this, we can change our JavaScript code to listen for click events on elements with the 'select2-selection select2-selection--single' class. When one of these elements is clicked, we use the same MutationObserver setup to find the input field and add the placeholder text.

Running the Script Only on the Checkout Page:
To make our solution even better, we can make sure the JavaScript code runs only when the URL path is '/checkout/'. We can achieve this by wrapping the entire script content in a conditional statement checking the current path. Although the script will be loaded on all pages, it will run only on the checkout page, making the site more efficient.

Conclusion:
In this article, we showed you a simple way to use JavaScript to improve the checkout experience on a WordPress site. By adding dynamic placeholder text and ensuring the script is loaded properly, we can make the checkout process friendlier and easier to use. This is just one example of how JavaScript can help make websites more engaging and user-friendly."
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
