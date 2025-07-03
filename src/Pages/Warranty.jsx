import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Facility from "../Components/Facility";
import $ from "jquery";
import Instragram from "../Components/Instragram";

const images = [
  "/assets/pics/rate.jpg",
  "/assets/pics/speaker 3.jpg",
  "/assets/pics/speaker2.jpg",
  "/assets/pics/PRDUCAT.jpg",
  "/assets/pics/PRODUCT2.webp",
  "/assets/pics/speaker.jpg",
];
const Warranty = () => {
  const [imgId, setImgId] = useState(1);
  const showcaseRef = useRef(null);
  const zoomRef = useRef(null);
  const [zoomStyles, setZoomStyles] = useState({});
  const [isZoomVisible, setIsZoomVisible] = useState(false);

  const slideImage = () => {
    const displayWidth = showcaseRef.current?.children[0].clientWidth;
    if (displayWidth && showcaseRef.current) {
      showcaseRef.current.style.transform = `translateX(${
        -(imgId - 1) * displayWidth
      }px)`;
    }
  };

  useEffect(() => {
    slideImage();
    window.addEventListener("resize", slideImage);
    return () => window.removeEventListener("resize", slideImage);
  }, [imgId]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setZoomStyles({
      backgroundImage: `url(${images[imgId - 1]})`,
      backgroundPosition: `${bgX}% ${bgY}%`,
      display: "block",
      top: y - 100,
      left: x + 20,
    });
  };
  const [count, setCount] = useState(1);
  const min = 1;
  const max = 10;

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    // Tabs
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
    $(".tab ul.tabs li a")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();
        const $tab = $(this).closest(".tab");
        const index = $(this).closest("li").index();

        $tab.find("ul.tabs > li").removeClass("current");
        $(this).closest("li").addClass("current");

        $tab.find(".tab-content .tabs-item").slideUp(0);
        $tab.find(".tab-content .tabs-item").eq(index).slideDown(0);
      });

    // Accordion
    $(".accordion").each(function () {
      const $accordion = $(this);
      $accordion
        .find(".accordion-title")
        .off("click")
        .on("click", function (e) {
          e.preventDefault();

          const $this = $(this);
          $this.toggleClass("active");
          $this.next(".accordion-content").slideToggle("fast");

          $accordion
            .find(".accordion-content")
            .not($this.next())
            .slideUp("fast");

          $accordion.find(".accordion-title").not($this).removeClass("active");
        });
    });
  }, []);
  return (
    <>
      <Navbar />

      <div>
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Warranty</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Warranty</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}
      <div className="support-page">
      <div className="container">
        <div className="warranty-container">
  <h2 className="title">Warranty Lookup</h2>
  <p className="subtitle">Enter a Service Tag or Product ID below.</p>

  <div className="search-box">
    <input
      type="text"
      placeholder="Enter Service Tag"
      className="search-input"
    />
    <button className="search-button">Search</button>
  </div>

  <p className="help-link">How to find your product identifier</p>
</div>

      </div>

      {/* <div className="sidebar">
        <button>🔍 Identify or Search</button>
        <button>💻 Detect This PC</button>
        <button>👁 Recently Viewed</button>
        <button>🔒 My Products</button>
      </div> */}

      <div className="help-section">
        <h2>How can we help you?</h2>
        <div className="cards">
          <div className="card">
            <h4>Extend or Upgrade Support</h4>
            <p>Minimize repair costs and keep devices running smoothly.</p>
          </div>
          <div className="card">
            <h4>Retail Registration</h4>
            <p>Register your product to access personalized support.</p>
          </div>
          <div className="card">
            <h4>Ownership Transfer</h4>
            <p>Transfer device and service ownership with ease.</p>
          </div>
          <div className="card">
            <h4>Service Contracts for Business</h4>
            <p>Maintenance and support for business devices.</p>
          </div>
          <div className="card">
            <h4>Service Contracts for Home</h4>
            <p>Coverage for home devices and technical help.</p>
          </div>
          <div className="card">
            <h4>Self-repair</h4>
            <p>Order parts, get tips, and repair your device yourself.</p>
          </div>
        </div>
      </div>
    </div>
</div>
    
      <Facility />

      <Footer />
    </>
  );
};

export default Warranty;
