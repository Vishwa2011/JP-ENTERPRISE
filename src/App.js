import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import Aboutus from "./Pages/Aboutus";
import Mice_problem from "./Pages/Mice_problem";
import OurProducts from "./Pages/OurProducts";


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
        <Route path="/OurProducts" element={<OurProducts/>}/>
     </Routes>
     <div class="go-top"><i class='bx bx-up-arrow-alt'></i></div>
    </>
  );
}

export default App;
