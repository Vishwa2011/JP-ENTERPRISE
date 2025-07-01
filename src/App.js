import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Aboutus from "./Pages/Aboutus";
import Mice_problem from "./Pages/Mice_problem";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OurProducts from "./Pages/OurProducts";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Compare from "./Pages/Compare";
import Faq from "./Pages/Faq";
import Productdetails from "./Pages/Productdetails";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import TermsandConditions from "./Pages/TermsandConditions";
import Gallery from "./Pages/Gallery";
import MyAccount from "./Pages/MyAccount";
import Video from "./Pages/Video";
import Mission from "./Pages/Mission";


function App() {
   const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);
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

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
     {/* <div className="switch-box">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "theme-dark"}
        />
        <span className="slider round"></span>
      </label>
    </div> */}
     <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Mice_problem"  element={<Mice_problem />}/>
        <Route path="/OurProducts" element={<OurProducts/>}/>
        <Route path="/Contact"  element={<Contact />}/>
        <Route path="/Blog"  element={<Blog />}/>
        <Route path="/BlogDetails"  element={<BlogDetails />}/>
        <Route path="/Cart"  element={<Cart />}/>
        <Route path="/Checkout"  element={<Checkout />}/>
        <Route path="/Login"  element={<Login />}/>
        <Route path="/Signup"  element={<Signup />}/>
        <Route path="/Compare"  element={<Compare />}/>
        <Route path="/Faq"  element={<Faq />}/>
        <Route path="/Productdetails" element={<Productdetails/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="/ShippingPolicy" element={<ShippingPolicy/>}/>
        <Route path="/ReturnPolicy" element={<ReturnPolicy/>}/>
        <Route path="/TermsandConditions" element={<TermsandConditions/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/MyAccount" element={<MyAccount/>}/>
        <Route path="/Video" element={<Video/>}/>
        <Route path="/Mission" element={<Mission/>}/>

     </Routes>
     <div class="go-top"><i class='bx bx-up-arrow-alt'></i></div>
         <div
      className={`go-top ${showButton ? 'active' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '0px',
        right: '30px',
        zIndex: 999,
        cursor: 'pointer',
        display: showButton ? 'block' : 'none'
      }}
    >
      ↑
    </div>
    </>
  );
}

export default App;
