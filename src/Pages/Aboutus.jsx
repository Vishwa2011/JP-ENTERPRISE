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
        {/* <!-- Start Search Overlay --> */}
        <div class="search-overlay">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="search-overlay-layer"></div>
              <div class="search-overlay-layer"></div>
              <div class="search-overlay-layer"></div>

              <div class="search-overlay-close">
                <span class="search-overlay-close-line"></span>
                <span class="search-overlay-close-line"></span>
              </div>

              <div class="search-overlay-form">
                <form>
                  <input
                    type="text"
                    class="input-search"
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <i class="bx bx-search-alt"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Search Overlay --> */}

        {/* <!-- Start Page Title --> */}
        <div class="page-title-area">
          <div class="container">
            <div class="page-title-content">
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
        <section class="about-area ptb-100">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6 col-md-12">
                <div class="about-image">
                  <img
                    src="/assets/pics/about1.jpg"
                    class="shadow"
                    alt="image"
                  />
                  <img
                    src="/assets/pics/about (1).png"
                    class="shadow"
                    alt="image"
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="about-content">
                  <span class="sub-title">About Us</span>
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

                  <div class="features-text">
                    <h5>
                      <i class="bx bx-shield-quarter"></i> Trusted by Thousands
                      Across India
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

            <div class="about-inner-area">
  <div class="row justify-content-center">
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="about-text">
        <h3>Our Story</h3>
        <p>Founded with a mission to protect homes, vehicles, and businesses from rodent damage.</p>

        <ul class="features-list">
          <li><i class="bx bx-check"></i> Trusted Rat Repellent Brand</li>
          <li><i class="bx bx-check"></i> Advanced Ultrasonic Technology</li>
          <li><i class="bx bx-check"></i> Safe for Humans & Pets</li>
          <li><i class="bx bx-check"></i> Proven Results Across India</li>
        </ul>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="about-text">
        <h3>Our Values</h3>
        <p>We believe in safe, eco-friendly, and effective solutions to everyday pest problems.</p>

        <ul class="features-list">
          <li><i class="bx bx-check"></i> Quality Without Compromise</li>
          <li><i class="bx bx-check"></i> Customer Satisfaction First</li>
          <li><i class="bx bx-check"></i> Innovation & Reliability</li>
          <li><i class="bx bx-check"></i> Clean & Safe Environments</li>
        </ul>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="about-text">
        <h3>Our Promise</h3>
        <p>We’re committed to keeping your space rodent-free—safely and effectively.</p>

        <ul class="features-list">
          <li><i class="bx bx-check"></i> Easy Installation</li>
          <li><i class="bx bx-check"></i> Long-lasting Protection</li>
          <li><i class="bx bx-check"></i> Efficient Customer Support</li>
          <li><i class="bx bx-check"></i> 100% Satisfaction Guarantee</li>
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
          class="offer-area bg-image1 ptb-100 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-5 col-md-6">
                <div class="offer-content">
                  <span class="sub-title">Limited Time Offer!</span>
                  <h2>-40% OFF</h2>
                  <p>Get The Best Deals Now</p>
                  <a href="" class="default-btn">
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Offer Area --> */}

        {/* <!-- Start Partner Area --> */}
        <div class="partner-area ptb-70">
          <div class="container">
            <div class="section-title">
              <h2>Our Partners</h2>
            </div>

            <div class="partner-slides owl-carousel owl-theme">
              <div class="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner1.png" alt="image" />
                </a>
              </div>

              <div class="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner2.png" alt="image" />
                </a>
              </div>

              <div class="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner3.png" alt="image" />
                </a>
              </div>

              <div class="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner4.png" alt="image" />
                </a>
              </div>

              <div class="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner5.png" alt="image" />
                </a>
              </div>

              <div class="partner-item">
                <a href="">
                  <img src="assets/img/partner/partner6.png" alt="image" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Partner Area --> */}

        {/* <!-- Start Testimonials Area --> */}
        <section class="testimonials-area ptb-100">
          <div class="container">
            <div class="section-title">
              <span class="sub-title">Testimonials</span>
              <h2>What Clients Says About Us</h2>
            </div>

            <div class="testimonials-slides owl-carousel owl-theme">
              <div class="single-testimonials-item">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div class="info">
                  <img
                    src="assets/img/user1.jpg"
                    class="shadow rounded-circle"
                    alt="image"
                  />
                  <h3>John Smith</h3>
                  <span>Student</span>
                </div>
              </div>

              <div class="single-testimonials-item">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div class="info">
                  <img
                    src="assets/img/user2.jpg"
                    class="shadow rounded-circle"
                    alt="image"
                  />
                  <h3>Sarah Taylor</h3>
                  <span>Student</span>
                </div>
              </div>

              <div class="single-testimonials-item">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div class="info">
                  <img
                    src="assets/img/user3.jpg"
                    class="shadow rounded-circle"
                    alt="image"
                  />
                  <h3>David Warner</h3>
                  <span>Student</span>
                </div>
              </div>

              <div class="single-testimonials-item">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div class="info">
                  <img
                    src="assets/img/user4.jpg"
                    class="shadow rounded-circle"
                    alt="image"
                  />
                  <h3>James Anderson</h3>
                  <span>Student</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonials Area --> */}

        <Facility />
        <Instragram />
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
