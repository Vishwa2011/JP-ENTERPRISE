import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Instragram from "../Components/Instragram"
import Facility from "../Components/Facility";

import {
  FaBolt,
  FaTools,
  FaShieldAlt,
  FaLeaf,
  FaTint,
  FaPowerOff,
  FaLightbulb,
  FaBatteryHalf,
  FaClock,
  FaFlag,
  FaCheckCircle,
  FaCogs,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination ,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
    {
      name: "Vivek Shah",
      role: "Software Engineer",
      review:
        "I was worried about rats damaging my car wires. After using JP Enterprise’s car repellent, it’s been completely safe.",
    },
    {
      name: "Rina Mehta",
      role: "Warehouse Manager",
      review:
        "This product worked wonderfully in our warehouse. We no longer see rodent droppings around the storage area.",
    },
    {
      name: "Sagar Patel",
      role: "Businessman",
      review:
        "Easy to install and very effective. I recommend it to anyone having issues with mice or rats in vehicles or homes.",
    },
    {
      name: "Neha Kothari",
      role: "Hotel Owner",
      review:
        "Thanks to JP Enterprise, we’ve seen zero damage in our parking garage. The ultrasonic system works perfectly.",
    },
    {
      name: "Pranav Desai",
      role: "Homeowner",
      review:
        "Affordable and highly efficient. No complaints so far after 3 months of usage. Totally recommended.",
    },
  ];
const featuresLeft = [
  {
    icon: <FaBolt size={24} className="text-danger" />,
    title: "Power Surge Protection",
    desc: "Safeguards your device from voltage spikes.",
  },
  {
    icon: <FaTools size={24} className="text-primary" />,
    title: "Advanced Engineering",
    desc: "Built with next-gen circuitry for maximum performance.",
  },
  {
    icon: <FaCogs size={24} className="text-success" />,
    title: "Easy Setup",
    desc: "Quick 2-step installation process.",
  },
  {
    icon: <FaLeaf size={24} className="text-success" />,
    title: "Eco-Friendly Design",
    desc: "Safe for pets, humans, and the environment.",
  },
  {
    icon: <FaTint size={24} className="text-info" />,
    title: "Water Resistant",
    desc: "Operates even in harsh weather conditions.",
  },
  {
    icon: <FaShieldAlt size={24} className="text-secondary" />,
    title: "Non-Lethal Technology",
    desc: "Repels threats without harm.",
  },
];

const featuresRight = [
  {
    icon: <FaPowerOff size={24} className="text-danger" />,
    title: "Touch Activation",
    desc: "Enable or disable with a simple touch.",
  },
  {
    icon: <FaLightbulb size={24} className="text-warning" />,
    title: "Dual LED Indicators",
    desc: "Bright status display with energy-saving LEDs.",
  },
  {
    icon: <FaBatteryHalf size={24} className="text-info" />,
    title: "Low Power Consumption",
    desc: "Consumes 20% less energy than previous models.",
  },
  {
    icon: <FaClock size={24} className="text-primary" />,
    title: "24/7 Active Protection",
    desc: "Runs non-stop for full-time defense.",
  },
  {
    icon: <FaFlag size={24} className="text-danger" />,
    title: "Made in India",
    desc: "Proudly designed and manufactured locally.",
  },
  {
    icon: <FaCheckCircle size={24} className="text-success" />,
    title: "1 Year Warranty",
    desc: "Coverage against all manufacturing defects.",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  return (
    <div>
      <Navbar />
    
      {/* <!-- Start Main Banner Area --> */}
      <div className="home-slides-three owl-carousel owl-theme">
        <div className="hero-banner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <span className="sub-title">Protect Your Vehicle!</span>
                      <h1>Car Rat Repellent</h1>
                      <p>
                     Protect your warehouse and office wiring from rat damage. Get 10% OFF – Limited Period Offer!
                      </p>
                      <div className="btn-box">
                        <a href="/OurProducts" className="default-btn">
                          Buy Now
                        </a>
                        {/* <a href="/OurProducts" className="optional-btn">Shop Men's</a> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="banner-image">
                      <div className="circle"></div>
                      <img src="/assets/pics/bbb.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-banner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <span className="sub-title">Protect Your Space!</span>
                      <h1>Say Goodbye to Rats</h1>
                      <p>
                        Keep your Gardens and Factories safe from wire-chewing rodents
                        – Limited Offer!
                      </p>
                      <div className="btn-box">
                        <a href="/OurProducts" className="default-btn">
                          Buy Now
                        </a>
                        {/* <a href="/OurProducts" className="optional-btn">Shop Men's</a> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="banner-image">
                      <div className="circle"></div>
                      <img src="/assets/pics/machine2.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Main Banner Area --> */}

      {/* section strt */}

      <section
        className="bird-repellent-banner"
        style={{ padding: "100px 20px", background: "#fff" }}
      >
        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          {/* Left Content */}
          <div className=" col-md-6 col-12 left-content">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "1.2",
              }}
            >
              Tough on Rats,
              <span
                style={{
                  color: " rgb(245, 63, 133)",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              >
                Easy for You
              </span>
              Reliable Rate Guards for Any Space
            </h2>
            <ul style={{ marginTop: "30px", listStyle: "none", padding: 0 }}>
              {[
                "No more chewed wires or droppings.",
                "Works indoors and outdoors without hassle.",
                "Safe for  warehouses, and shops.",
                "Long-lasting protection with zero maintenance.",
                "Blocks entry points and deters nesting.",
                "Chemical-free and eco-friendly solution.",
                "Easy to install, fits any space or corner.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{ marginBottom: "10px", fontSize: "18px" }}
                >
                  
                  <i className="fa-regular fa-circle-check" style={{color:'rgb(245, 63, 133)',marginRight:'10px'}}></i>
                  {item}
                </li>
              ))}
            </ul>
            <button
              style={{
                marginTop: "30px",
                padding: "12px 24px",
                backgroundColor: " rgb(245, 63, 133)",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Protect Your Space Today! →
            </button>
          </div>

          {/* Right Image */}
          <div
            className=" col-md-6 col-12 right-image"
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <img
              src="/assets/pics/swsw.png"
              alt="Bird Repellent Device"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </section>

      {/* section end */}

      {/* <!-- Start Products Area --> */}
      <section className="products-area pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">See Our Collection</span>
            <h2>Recent Products</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-productsBox">
                <div className="products-image">
                  <a href="/Productdetails">
                    <img
                      src="/assets/pics/rate.jpg"
                      className="main-image"
                      alt="image"
                    />
                    <img
                      src="/assets/pics/speaker.jpg"
                      className="hover-image"
                      alt="image"
                    />
                  </a>

                  <div className="products-button">
                    <ul>
                      <li>
                        <div className="wishlist-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#shoppingWishlistModal"
                          >
                            <i className="bx bx-heart"></i>
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </div>
                      </li>
                      {/* <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li> */}
                      <li>
                        <div className="quick-view-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsQuickView"
                          >
                            <i className="bx bx-search-alt"></i>
                            <span className="tooltip-label">Quick View</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="new-tag">New!</div>
                </div>

                <div className="products-content">
                  <span className="category">Rat Repellent</span>
                  <h3>
                    <a href="/Productdetails">
                      High-Powered Ultrasonic Rat Repellent 
                    </a>
                  </h3>
                  <span>Brand: Generic</span>
                  <div className="star-rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="price">
                    <span className="new-price">₹3,331</span>
                    <span className="old-price">₹9,999</span>
                  </div>
                  <a href="/Cart" className="add-to-cart">
                    Add to Cart
                  </a>
                </div>

                <span className="products-discount">
                  <span>20% OFF</span>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-productsBox">
                <div className="products-image">
                  <a href="/Productdetails">
                    <img
                      src="/assets/pics/rate.jpg"
                      className="main-image"
                      alt="image"
                    />
                    <img
                      src="/assets/pics/speaker 3.jpg"
                      className="hover-image"
                      alt="image"
                    />
                  </a>

                  <div className="products-button">
                    <ul>
                      <li>
                        <div className="wishlist-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#shoppingWishlistModal"
                          >
                            <i className="bx bx-heart"></i>
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </div>
                      </li>
                      {/* <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li> */}
                      <li>
                        <div className="quick-view-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsQuickView"
                          >
                            <i className="bx bx-search-alt"></i>
                            <span className="tooltip-label">Quick View</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="sale-tag">Sale!</div>
                </div>

                <div className="products-content">
                  <span className="category">Rat Repellent</span>
                  <h3>
                    <a href="/Productdetails">
                      Smart Ultrasonic Rat Repellent 
                    </a>
                  </h3>
                  <span>Brand: Generic</span>
                  <div className="star-rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="price">
                    <span className="new-price">₹3,429</span>
                    <span className="old-price">₹9,999</span>
                  </div>
                  <a href="/Cart" className="add-to-cart">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-productsBox">
                <div className="products-image">
                  <a href="/Productdetails">
                    <img
                      src="/assets/pics/rate.jpg"
                      className="main-image"
                      alt="image"
                    />
                    <img
                      src="/assets/pics/speaker2.jpg"
                      className="hover-image"
                      alt="image"
                    />
                  </a>

                  <div className="products-button">
                    <ul>
                      <li>
                        <div className="wishlist-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#shoppingWishlistModal"
                          >
                            <i className="bx bx-heart"></i>
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </div>
                      </li>
                      {/* <li>
                                            <div className="compare-btn">
                                                <a href="/Compare">
                                                    <i class='bx bx-refresh'></i>
                                                    <span className="tooltip-label">Compare</span>
                                                </a>
                                            </div>
                                        </li> */}
                      <li>
                        <div className="quick-view-btn">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsQuickView"
                          >
                            <i className="bx bx-search-alt"></i>
                            <span className="tooltip-label">Quick View</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="products-content">
                  <span className="category">Rat Repellent</span>
                  <h3>
                    <a href="/Productdetails">
                      High-Frequency Ultrasonic Rat Repeller 
                    </a>
                  </h3>
                  <span>Brand: Generic</span>
                  <div className="star-rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <div className="price">
                    <span className="new-price">₹3,331</span>
                    <span className="old-price">₹9,999</span>
                  </div>
                  <a href="/Cart" className="add-to-cart">
                    Add to Cart
                  </a>
                </div>

                <span className="products-discount">
                  <span>15% OFF</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Products Area --> */}
<div style={{ background:'#f4f4f4'}}>
   
      <div className="container " style={{ paddingBottom: "100px",paddingTop:'65px'}}>
        <div className="text-center mb-4">
          <span
            className="text-uppercase  fw-semibold"
            style={{ color: "rgb(245, 63, 133)" }}
          >
            Smart Choice for Safety
          </span>
          <h2>Proven solutions for a rodent-free life.</h2>
        </div>

        <div className="row g-4">
          {/* <!-- Box 1 --> */}
          <div className="col-lg-4">
            <div
              className="bg-light rounded-4 p-4 shadow d-flex gap-3 shield"
              style={{ backgroundColor: "#f1f8f5" }}
            >
              <i
                className="fa-solid fa-shield"
                style={{
                  fontSize: "34px",
                  paddingTop: "13px",
                  color: "rgb(245, 63, 133)",
                }}
              ></i>
              <div
                style={{
                  borderLeft: "3px solid rgb(245, 63, 133)",
                  paddingLeft: "10px",
                }}
              >
                <h3
                  className="h5 fw-bold mb-2"
                  style={{ fontSize: "29px", marginBottom: "11px" }}
                >
                  Rodent Shield
                </h3>
                <p className="text-muted" style={{ fontSize: "17px" }}>
                  Guards your home and vehicle.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="col-lg-4">
            <div
              className="bg-light rounded-4 p-4 shadow d-flex gap-3 shield"
              style={{ backgroundColor: "#f1f8f5" }}
            >
              <i
                className="fa-solid fa-helmet-safety"
                style={{
                  fontSize: "34px",
                  paddingTop: "13px",
                  color: "rgb(245, 63, 133)",
                }}
              ></i>
              <div
                style={{
                  borderLeft: "3px solid rgb(245, 63, 133)",
                  paddingLeft: "10px",
                }}
              >
                <h3
                  className="h5 fw-bold mb-2"
                  style={{ fontSize: "29px", marginBottom: "11px" }}
                >
                  Natural & Safe
                </h3>
                <p className="text-muted" style={{ fontSize: "17px" }}>
                  Gentle on people and pets.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="col-lg-4">
            <div
              className="bg-light rounded-4 p-4 shadow d-flex gap-3 shield"
              style={{ backgroundColor: "#f1f8f5" }}
            >
              <i
                className="fa-solid fa-hands-holding-circle"
                style={{
                  fontSize: "34px",
                  paddingTop: "13px",
                  color: "rgb(245, 63, 133)",
                }}
              ></i>
              <div
                style={{
                  borderLeft: "3px solid rgb(245, 63, 133)",
                  paddingLeft: "10px",
                }}
              >
                <h3
                  className="h5 fw-bold mb-2"
                  style={{ fontSize: "29px", marginBottom: "11px" }}
                >
                  Lasting Protection
                </h3>
                <p className="text-muted" style={{ fontSize: "17px" }}>
                  Works long after application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>

      {/*  */}

      <div className="container-fluid " style={{paddingBottom:'135px',paddingTop:'100px'}} >
        <div className="about-content text-center mb-4">
          <span className="sub-title">Advanced Ultrasonic Defense System</span>
          <h2>
            Keep rodents away from your car with next-gen, <br />{" "}
            maintenance-free technology by JP Enterprise.
          </h2>
        </div>
        <div className="row align-items-center d-flex justify-content-center">
          {/* Left features */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 featuresLeft">
            {featuresLeft.map((item, i) => (
              <div className="card border-0 mb-3 shadow-sm" key={i}>
                <div className="card-body d-flex">
                  <div className="me-3 d-flex align-items-center">
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">{item.title}</h6>
                    <p className="mb-0 small text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image & Button */}
          <div className="col-lg-4 col-md-12 text-center">
            <div>
              <img
                src="/assets/pics/rate.jpg"
                alt="Product"
                className="img-fluid float-animation"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div>
              <a href="/OurProducts" className="default-btn mt-4 px-4">
                BUY NOW
              </a>
            </div>
          </div>

          {/* Right features */}
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 featuresRight">
            {featuresRight.map((item, i) => (
              <div className="card border-0 mb-3 shadow-sm" key={i}>
                <div className="card-body d-flex">
                  <div className="me-3 d-flex align-items-center">
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">{item.title}</h6>
                    <p className="mb-0 small text-muted">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}

      {/* <!-- Start Offer Products Area --> */}
       <section className="offer-products-area" style={{ paddingBottom: "100px" }}>
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="single-offer-products d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="content">
                <h3>
                  <a href="/OurProducts">Latest Rat Repellent Devices</a>
                </h3>
                <p>
                  Protect your home, office, and car from rodent damage with our
                  newly launched ultrasonic products.
                </p>
                <a href="/OurProducts" className="default-btn">
                  Shop Now
                </a>
              </div>

              <div className="image">
                <a href="/OurProducts">
                  <img
                    src="/assets/pics/Say Goodbye to Rodents!.png"
                    alt="JP Enterprise new collection"
                    style={{ border: "1px solid" }}
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-offer-products d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="content">
                <h3>
                  <a href="/OurProducts">Best-Selling jp enterprise</a>
                </h3>
                <p>
                  Join thousands of satisfied customers using our best-rated
                  ultrasonic rat repellers.
                </p>
                <a href="/OurProducts" className="default-btn">
                  Explore More
                </a>
              </div>

              <div className="image">
                <a href="/OurProducts">
                  <img
                    src="/assets/pics/baners.png"
                    alt="JP Enterprise popular products"
                    style={{ border: "1px solid" }}
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-offer-products d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="content">
                <h3>
                  <a href="/OurProducts">Top Trending Devices</a>
                </h3>
                <p>
                  Smart, silent, and safe — our trending ultrasonic solutions
                  are built for modern spaces.
                </p>
                <a href="/OurProducts" className="default-btn">
                  Grab Yours
                </a>
              </div>

              <div className="image">
                <a href="/OurProducts">
                  <img
                    src="/assets/pics/bg3.png"
                    alt="JP Enterprise trending products"
                    style={{ border: "1px solid" }}
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

      {/* <!-- End Offer Products Area --> */}

  

      {/* <!-- Start Facility Area --> */}
      <Facility />
      {/* <!-- End Facility Area --> */}



              {/* <!-- Start About Area --> */}
        <section className="about-area " style={{paddingTop:'60px',paddingBottom:'90px'}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img
                    src="/assets/pics/about1.jpg"
                    className="shadow"
                    alt="image"
                  />
                  <img
                    src="/assets/pics/about (1).png"
                    className="shadow"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <span className="sub-title">Rat Repellent</span>
                  
                  <h5>
                    JP Enterprise offers advanced ultrasonic rat repellent
                    devices for every need.
                  </h5>
                  <p style={{textAlign:'justify'}}>
                   The machine continuously emits ultrasonic frequencies that create an uncomfortable environment for rats. This forces them to leave the area without causing them any harm.
                  </p>
                  <p style={{textAlign:'justify'}}>
                    This device uses no poison, no harmful chemicals, and no traps. It is completely safe for children, pets, and the environment, making it a smart alternative to traditional pest control methods.
                  </p>

                     <p style={{textAlign:'justify'}}>
                 Just plug it in and let it work! There’s no maintenance required. Its compact design makes it perfect for use in homes, shops, offices, godowns, or factories.</p>
                  <p style={{textAlign:'justify'}}>
                 The machine is energy efficient and designed to run continuously with very low electricity usage. It's a one-time investment that provides long-term protection from rats.
                  </p>

                 
                  <p style={{textAlign:'justify'}}>
               The Ultrasonic Rat Repellent Machine is a modern, eco-friendly solution to keep rats away from your home, office, warehouse, or shop. It emits high-frequency sound waves that are inaudible to humans and pets but extremely uncomfortable for rats, forcing them to leave the area without harm.
                  </p>
                
                <div className="btn-box">
                        <a href="/OurProducts" className="default-btn">
                          Buy Now
                        </a>
                        {/* <a href="/OurProducts" className="optional-btn">Shop Men's</a> */}
                      </div>
                </div>
              </div>
            </div>

       
          </div>
        </section>
        {/* <!-- End About Area --> */}

      {/* <!-- Start Brand Area --> */}
     <div className="brand-area ptb-70">
      <div className="container">
        <div className="section-title">
          <h2>We are Deal With</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
        >
          {[
            "/assets/pics/brand1.png",
            "/assets/pics/brand2.png",
            "/assets/pics/brand3.png",
            "/assets/pics/brand4.png",
            "/assets/pics/brand5.png",
            "/assets/pics/brand6.png",
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="brand-item" style={{width:'150px'}} >
                <a href="#">
                  <img src={img} alt={`brand${i + 1}`} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
      {/* <!-- End Brand Area --> */}

      {/* <!-- Start Testimonials Area --> */}
    
       <section className="testimonials-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Testimonials</span>
          <h2>What Clients Say About Us</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{paddingBottom:'60px'}}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="single-testimonials-item"
                style={{
                  background:
                    i === activeIndex + 1 ||
                    (activeIndex === testimonials.length - 1 && i === 0)
                      ? "rgb(245, 63, 133)"
                      : "#fff",
                  color:
                    i === activeIndex + 1 ||
                    (activeIndex === testimonials.length - 1 && i === 0)
                      ? "#fff"
                      : "#000",
                  borderRadius: "10px",
                  padding: "40px 20px",
                  transition: "0.3s",
                }}
              >
                <p style={{paddingBottom:"40px"}}>“{t.review}”</p>
                <div className="info">
                  <img
                    src="/assets/pics/user.png"
                    className="shadow rounded-circle"
                    alt="User"
                  />
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
        
      {/* <!-- End Testimonials Area --> */}

  

      {/* why choose start */}
<div style={{background:'#f4f4f4'}}>

      <section className="section" >
        <div className="about-content text-center mb-4">
          <span className="sub-title">Why Choose Us?</span>
          <h2>Smarter safety, no harm done.</h2>
        </div>

        <div className="offer-grid">
          <div className="offer-card">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Pure Protection, Zero Chemicals</h3>
            <p>Safe for you, your pets, and tough on rodents.</p>
          </div>

          <div className="offer-card">
            <i className="fa-solid fa-bolt"></i>
            <h3>Power-Smart Performance</h3>
            <p>Round-the-clock defense with minimal energy use.</p>
          </div>

          <div className="offer-card">
            <i className="fa-solid fa-heart-circle-check"></i>
            <h3>Safe for All, Harmful to None</h3>
            <p>
              Targets only rodents — keeping your loved ones completely safe.
            </p>
          </div>

          <div className="offer-card">
            <i className="fa-solid fa-plug-circle-bolt"></i>
            <h3>Invest Once, Protect Always</h3>
            <p>
              No refills, no fuss—just plug in and enjoy lifelong protection.
            </p>
          </div>
        </div>
      </section>
</div>

      {/* why choose end */}

          {/* <!-- Start Blog Area --> */}
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Recent Insights</span>
            <h2>From The JP Enterprise Blog</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a href="/Blog">
                    <img
                      src="/assets/pics/Rat-in-Car.png"
                      alt="Rat Infestation Prevention"
                    />
                  </a>
                  <div className="date">
                    <span>June 20, 2025</span>
                  </div>
                </div>

                <div className="post-content">
                  <span className="category">Awareness</span>
                  <h3>
                    <a href="/Blog">Top 5 Signs You May Have a Rat Problem</a>
                  </h3>
                  <a href="/Blog" className="details-btn">
                    Read Story
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a href="/Blog">
                    <img
                      src="/assets/pics/blog2.jpg"
                      alt="Why Rat Repellent is Important"
                    />
                  </a>
                    <div className="date">
                    <span>June 20, 2025</span>
                  </div>
                </div>

                <div className="post-content">
                  <span className="category">Tips</span>
                  <h3>
                    <a href="/Blog">
                      Why Every Office Needs a Rat Repellent Device
                    </a>
                  </h3>
                  <a href="/Blog" className="details-btn">
                    Read Story
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <a href="/Blog">
                    <img
                      src="/assets/pics/Rat-gnawing.png"
                      alt="How ultrasonic repellers work"
                    />
                  </a>
                    <div className="date">
                    <span>June 20, 2025</span>
                  </div>
                </div>

                <div className="post-content">
                  <span className="category">Technology</span>
                  <h3>
                    <a href="/Blog">
                      How Ultrasonic Rat Repellent Technology Works
                    </a>
                  </h3>
                  <a href="/Blog" className="details-btn">
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Blog Area --> */}

      {/* <!-- Start Categories Banner Area --> */}
      <div style={{background:'rgb(244, 244, 244)'}}>

      <section className="categories-banner-area  pb-70" style={{paddingTop:'80px'}}>
        <div className="about-content text-center mb-4">
          <span className="sub-title">Effective Solution</span>
          <h2>Discover the power of JP Enterprise ultrasound rat repellent</h2>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-categories-box">
                {/* Embedded YouTube Video with inline CSS for 16:9 aspect ratio */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/LRVyANxYMME?rel=0&showinfo=0"
                    title="YouTube video"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "0",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-categories-box">
                {/* Embedded YouTube Video with inline CSS for 16:9 aspect ratio */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%",
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/LRVyANxYMME?rel=0&showinfo=0"
                    title="YouTube video"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "0",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
         <div className="d-flex justify-content-center">
           <div className="btn-box">
            <a href="/Video" className="default-btn">
              View More
            </a>
          </div>
         </div>
        </div>
      </section>
      </div>
      {/* <!-- End Categories Banner Area --> */}

      {/* <!-- Start Instagram Area --> */}
      <Instragram />
      {/* <!-- End Instagram Area --> */}

      {/* <!-- Start Wishlist Modal --> */}
      {/* <div className="modal right fade shoppingWishlistModal" id="shoppingWishlistModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class='bx bx-x'></i></span>
                    </button>

                    <div className="modal-body">
                        <h3>My Wish List (3)</h3>

                        <div className="products-cart-content">
                            <div className="products-cart">
                                <div className="products-image">
                                    <a href="#"><img src="assets/img/products/img1.jpg" alt="image" /></a>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">Long Sleeve Leopard T-Shirt</a></h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$250.00</span>
                                    </div>
                                    <a href="#" className="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div className="products-cart">
                                <div className="products-image">
                                    <a href="#"><img src="assets/img/products/img2.jpg" alt="image" /></a>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">Causal V-Neck Soft Raglan</a></h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$200.00</span>
                                    </div>
                                    <a href="#" className="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>

                            <div className="products-cart">
                                <div className="products-image">
                                    <a href="#"><img src="assets/img/products/img3.jpg" alt="image" /></a>
                                </div>

                                <div className="products-content">
                                    <h3><a href="#">Hanes Men's Pullover</a></h3>
                                    <span>Blue / XS</span>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$200.00</span>
                                    </div>
                                    <a href="#" className="remove-btn"><i class='bx bx-trash'></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="products-cart-btn">
                            <a href="#" className="optional-btn">View Shopping Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      {/* <!-- End Wishlist Modal --> */}
      {/* <!-- Start QuickView Modal Area --> */}
      <div
        className="modal fade productsQuickView"
        id="productsQuickView"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="products-image">
                  <img src="/assets/pics/rate1.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="products-content">
                  <h3>
                    <a href="#">
                      High-Frequency Ultrasonic Rat Repeller – Dual Indoor &
                      Outdoor Use | 1500 Sq. Ft | Plug & Play
                    </a>
                  </h3>

                  <div className="price">
                    <span className="new-price">₹3,429</span>
                    <span className="old-price">₹9,999</span>
                  </div>

                  <div className="products-review">
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <a href="#" className="rating-count">
                      3 ratings
                    </a>
                  </div>

                  <ul className="products-info">
                    <li>
                      <span>Brand:</span> <a href="#">Generic</a>
                    </li>
                    <li>
                      <span>Style:</span> <a href="#">modern</a>
                    </li>
                    <li>
                      <span>Material:</span> <a href="#"> Metal</a>
                    </li>
                    <li>
                      <span>
                        Product <br />
                        Dimensions:
                      </span>{" "}
                      <a href="">5L x 10W x 10H Centimeters</a>
                    </li>
                    <li>
                      <span>Item Weight:</span>
                      <a href="">750 Grams</a>
                    </li>
                    <li>
                      <span>Number of Pieces:</span>
                      <a href="">1</a>
                    </li>
                  </ul>

                  {/* <div className="products-color-switch">
                                    <h4>Color:</h4>

                                    <ul>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Black" className="color-black"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="White" className="color-white"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Green" className="color-green"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Yellow Green" className="color-yellowgreen"></a></li>
                                        <li><a href="#" data-bs-toggle="tooltip" data-placement="top" title="Teal" className="color-teal"></a></li>
                                    </ul>
                                </div> */}

                  {/* <div className="products-size-wrapper">
                                    <h4>Size:</h4>

                                    <ul>
                                        <li><a href="#">XS</a></li>
                                        <li className="active"><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">XL</a></li>
                                        <li><a href="#">XXL</a></li>
                                    </ul>
                                </div> */}

                  <div className="products-add-to-cart">
                    <div className="input-counter">
                      <span className="minus-btn" onClick={handleDecrement}>
                        <i className="bx bx-minus"></i>
                      </span>
                      <input type="text" value={count} readOnly />
                      <span className="plus-btn" onClick={handleIncrement}>
                        <i className="bx bx-plus"></i>
                      </span>
                    </div>

                    <a href="/Cart">
                      {" "}
                      <button type="submit" className="default-btn">
                        Add to Cart
                      </button>
                    </a>
                  </div>

                  <a href="#" className="view-full-info">
                    View Full Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End QuickView Modal Area --> */}
      

      <Footer />
    </div>
  );
};

export default Home;
