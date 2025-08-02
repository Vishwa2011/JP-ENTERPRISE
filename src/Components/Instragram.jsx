import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Instragram() {
  const images = [
    "insta1.png",
    "insta2.webp",
    "insta3.jpg",
    "insta4.webp",
    "insta5.jpg",
    "insta6.png",
    "insta1.png",
    "insta2.webp",
    "insta3.jpg",
    "insta4.webp",
  ];

  return (
    <div className="instagram-area" style={{paddingTop:'30px',paddingBottom:'30px'}}>
      <div className="container-fluid">
        <div className="instagram-title">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Visit our Instagram page">
            <i className="bx bxl-instagram"></i> Follow us on @jp Enterprise
          </a>
        </div>

        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          // loop={true}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          // modules={[Autoplay]}
          className="instagram-swiper"
          breakpoints={{
            0: { slidesPerView: 3 },
            576: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            992: { slidesPerView: 6 },
            1200: { slidesPerView: 7 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="single-instagram-post">
                <img src={`assets/img/instagram/${img}`} alt={`Instagram ${i}`} loading="lazy"  />
                <i className="bx bxl-instagram"></i>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                  
                  aria-label="Visit our Instagram page"
                ></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
