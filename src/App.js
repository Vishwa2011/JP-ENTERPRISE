import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import Aboutus from "./Pages/Aboutus";
import Mice_problem from "./Pages/Mice_problem";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";


function App() {
    const [theme, setTheme] = useState("theme-light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("xton_theme") || "theme-light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  // Handle toggle
  const toggleTheme = () => {
    const newTheme = theme === "theme-dark" ? "theme-light" : "theme-dark";
    setTheme(newTheme);
    localStorage.setItem("xton_theme", newTheme);
    document.documentElement.className = newTheme;
  };
  return (
    <>
     <div className="switch-box">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "theme-dark"}
        />
        <span className="slider round"></span>
      </label>
    </div>
     <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Mice_problem"  element={<Mice_problem />}/>

        <Route path="/Contact"  element={<Contact />}/>
        <Route path="/Blog"  element={<Blog />}/>
        <Route path="/BlogDetails"  element={<BlogDetails />}/>
        <Route path="/Cart"  element={<Cart />}/>
        <Route path="/Checkout"  element={<Checkout />}/>

     </Routes>
     <div class="go-top"><i class='bx bx-up-arrow-alt'></i></div>
    </>
  );
}

export default App;
