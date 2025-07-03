import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; 

const teamMembers = [
  {
    name: "Vishal Bhatt",
    title: "Legal Advisor",
    img: "/assets/pics/teamslider1.jpg",
  },
  {
    name: "Nayan Modi",
    title: "General Manager",
    img: "/assets/pics/teamslide2.jpg",
  },
  {
    name: "Priya Patel",
    title: "Web Designer",
    img: "/assets/pics/teamslide3.jpg",
  },
  {
    name: "Krina Balar",
    title: "Graphics Designer",
    img: "/assets/pics/teamslide4.jpg",
  },
  {
    name: "Nayan Modi",
    title: "General Manager",
    img: "/assets/pics/teamslide2.jpg",
  },
  {
    name: "Priya Patel",
    title: "Web Designer",
    img: "/assets/pics/teamslide3.jpg",
  },
];
const Ourteam = () => {
  return (
    <>
      <Navbar />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Our Team</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Start Products Area --> */}
      <section className="products-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title text-start"
            style={{ justifyContent: "center", display: "flex" }}
          >
            {/* <span className="sub-title">See Our Collection</span> */}
            <h2>Our Team</h2>
          </div>

           <div className="products-slides-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="single-products-box">
              <div className="products-image">
                <a>
                  <img
                    src={member.img}
                    className="main-image"
                    alt="image"
                  />
                  <img
                    src={member.img}
                    className="hover-image"
                    alt="image"
                  />
                </a>
                <div className="products-button">
                  <ul>
                    <li>
                      <div className="wishlist-btn">
                        <a
                          href="https://www.facebook.com/login"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-facebook"></i>
                          <span className="tooltip-label">Facebook</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="compare-btn">
                        <a
                          href="https://www.instagram.com/accounts/login/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-instagram"></i>
                          <span className="tooltip-label">Instagram</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="quick-view-btn">
                        <a
                          href="https://www.linkedin.com/login"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                          <span className="tooltip-label">LinkedIn</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="products-content">
                <h3>
                  <a href="">{member.name}</a>
                </h3>
                <div className="price">
                  <span className="new-price">{member.title}</span>
                </div>

                <a href="" className="add-to-cart">
                  {member.title}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
      </section>
      {/* <!-- End Products Area --></div> */}

      <Footer />
    </>
  );
};

export default Ourteam;
