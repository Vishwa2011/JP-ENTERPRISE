import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Facility from "../Components/Facility";
import Instragram from "../Components/Instragram";

const Aboutus = () => {
  return (
    <>
      <Navbar />
    

      <div>
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>About Us</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start About Area --> */}
        <section className="about-area ptb-100">
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
                  <span className="sub-title">About Us</span>
                  <h2>
                    JP Enterprise – Trusted Name in Rat Repellent Solutions
                  </h2>
                  <h6>
                    JP Enterprise offers advanced ultrasonic rat repellent
                    devices for every need.
                  </h6>
                  <p>
                    <strong>JP Enterprise</strong> is committed to protecting
                    your home, office, warehouse, and vehicle from rodent damage
                    using cutting-edge technology.
                  </p>
                  <p>
                    Our powerful devices are safe, effective, and chemical-free
                    — designed to prevent costly damage and provide peace of
                    mind.
                  </p>

                  <div className="features-text">
                    <h5>
                      <i className="bx bx-shield-quarter"></i> Trusted by
                      Thousands Across India
                    </h5>
                    <p>
                      We deliver hassle-free service and quality rat control
                      solutions right to your doorstep, with support you can
                      count on.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-inner-area">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="about-text">
                    <h3>Our Story</h3>
                    <p>
                      Founded with a mission to protect homes, vehicles, and
                      businesses from rodent damage.
                    </p>

                    <ul className="features-list">
                      <li>
                        <i className="bx bx-check"></i> Trusted Rat Repellent
                        Brand
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Advanced Ultrasonic
                        Technology
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Safe for Humans & Pets
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Proven Results Across
                        India
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="about-text">
                    <h3>Our Values</h3>
                    <p>
                      We believe in safe, eco-friendly, and effective solutions
                      to everyday pest problems.
                    </p>

                    <ul className="features-list">
                      <li>
                        <i className="bx bx-check"></i> Quality Without
                        Compromise
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Customer Satisfaction
                        First
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Innovation & Reliability
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Clean & Safe
                        Environments
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="about-text">
                    <h3>Our Promise</h3>
                    <p>
                      We’re committed to keeping your space rodent-free—safely
                      and effectively.
                    </p>

                    <ul className="features-list">
                      <li>
                        <i className="bx bx-check"></i> Easy Installation
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Long-lasting Protection
                      </li>
                      <li>
                        <i className="bx bx-check"></i> Efficient Customer
                        Support
                      </li>
                      <li>
                        <i className="bx bx-check"></i> 100% Satisfaction
                        Guarantee
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Area --> */}

        {/* <!-- Start Offer Area --> */}
        <section
          className="offer-area bg-image1 ptb-100 mb-5 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6">
                <div className="offer-content">
                  <span className="sub-title">Limited Time Offer!</span>
                  <h2>-40% OFF</h2>
                  <p>Get The Best Deals Now</p>
                  <a href="" className="default-btn">
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Offer Area --> */}

        {/* <!-- Start Partner Area --> */}
        {/* <div className="partner-area ptb-70">
          <div className="container">
            <div className="section-title">
              <h2>Our Partners</h2>
            </div>

            <div className="partner-slides owl-carousel owl-theme">
              <div className="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner1.png" alt="image" />
                </a>
              </div>

              <div className="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner2.png" alt="image" />
                </a>
              </div>

              <div className="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner3.png" alt="image" />
                </a>
              </div>

              <div className="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner4.png" alt="image" />
                </a>
              </div>

              <div className="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner5.png" alt="image" />
                </a>
              </div>

              <div className="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner6.png" alt="image" />
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- End Partner Area --> */}

        <Facility />
        <Instragram />
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
