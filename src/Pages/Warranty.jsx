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
  const [serviceTag, setServiceTag] = useState("");
  const [error, setError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const validTags = ["123"]; // Add more if needed

  const handleSearch = () => {
    if (validTags.includes(serviceTag.trim().toUpperCase())) {
      setShowInfo(true);
      setError(false);
    } else {
      setError(true);
      setShowInfo(false);
    }
  };
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
            <h1 className="title">Warranty Lookup</h1>
            <p className="subtitle">Enter a Service Tag or Product ID below.</p>

            {error && (
              <div className="alert alert-warning d-flex justify-content-between align-items-center">
                <span>
                  ⚠️ No match found for that Service Tag or Product ID. Please
                  try again.
                </span>
                <button
                  onClick={() => setError(false)}
                  className="btn-close"
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "18px",
                    lineHeight: "1",
                  }}
                >
                  &times;
                </button>
              </div>
            )}

            <div className="search-bar d-flex justify-content-center align-items-center flex-wrap gap-2 mt-3">
              <input
                type="text"
                placeholder="Enter Service Tag (123)"
                value={serviceTag}
                onChange={(e) => setServiceTag(e.target.value)}
              />
              <button className="search-btns" onClick={handleSearch}>
                Search
              </button>
            </div>

            <p className="helper-link mt-2">
              <a href="#">How to find your product identifier</a>
            </p>
          </div>

          {/* Show Warranty Info if valid */}
          {showInfo && (
            <div className="container mt-5 p-4 shadow rounded bg-light warranty-detail">
              <h3 className="mb-5 ">Product Warranty Details</h3>

              <div className="row align-items-center">
                {/* Product Image */}
                <div className="col-md-4 mb-3 mb-md-0 text-center">
                  <div className="product-imgs">
                    <div
                      className="img-display zoom-container"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsZoomVisible(true)}
                      onMouseLeave={() => setIsZoomVisible(false)}
                    >
                      <div className="img-showcase" ref={showcaseRef}>
                        {images.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`shoe ${index + 1}`}
                          />
                        ))}
                      </div>

                      {isZoomVisible && (
                        <div className="zoom-lens" style={zoomStyles}></div>
                      )}
                    </div>

                    <div className="img-select">
                      {images.map((src, index) => (
                        <div className="img-item" key={index}>
                          <button
                            onClick={() => setImgId(index + 1)}
                            style={{
                              border: "none",
                              background: "transparent",
                              padding: 0,
                            }}
                          >
                            <img src={src} alt={`shoe thumb ${index + 1}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Warranty Table */}
                <div className="col-md-8"> 
                  <table className="table warranty-table mb-0">
                    <tbody>
                      <tr>
                        <th>Product Name:</th>
                        <td>Smart Ultrasonic Rat Repellent</td>
                      </tr>
                      <tr>
                        <th>Model Number:</th>
                        <td>JP-RATGUARD01</td>
                      </tr>
                      <tr>
                        <th>Serial Number:</th>
                        <td>123</td>
                      </tr>
                      <tr>
                        <th>Purchase Date:</th>
                        <td>15 March 2024</td>
                      </tr>
                      <tr>
                        <th>Warranty Status:</th>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Warranty Expiry:</th>
                        <td>15 March 2025</td>
                      </tr>
                      <tr>
                        <th>Support:</th>
                        <td>1-Year Standard Warranty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Help Cards */}
          <div className="help-section">
            <h2 className="help-title">How can we help you?</h2>
            <div className="row">
              {[
                {
                  title: "Device Installation",
                  text: "Follow easy steps to install your ultrasonic rat repellent at home or in your office without expert help.",
                },
                {
                  title: "Effective Coverage",
                  text: "Learn how much area each device can cover and how to place it for maximum rodent protection.",
                },
                {
                  title: "Warranty Registration",
                  text: "Register your product to activate the warranty and enjoy hassle-free service support.",
                },
                {
                  title: "Business Use Support",
                  text: "Explore service plans and setup help for offices, warehouses, and industrial spaces.",
                },
                {
                  title: "Home Use Guidance",
                  text: "Get recommendations on where and how to use the device inside your home for best results.",
                },
                {
                  title: "Troubleshooting & Repairs",
                  text: "Fix common issues, order replacement parts, and get DIY repair instructions.",
                },
              ].map((item, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card h-100 shadow-sm animate-card">
                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Facility />
      <Instragram />
      <Footer />
    </>
  );
};

export default Warranty;
