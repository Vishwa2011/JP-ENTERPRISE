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
    <div className="instagram-area" style={{paddingTop:'60px'}}>
      <div className="container-fluid">
        <div className="instagram-title">
          <a href="#" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i> Follow us on @jp Enterprise
          </a>
        </div>

        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="instagram-swiper"
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="single-instagram-post">
                <img src={`assets/img/instagram/${img}`} alt={`Instagram ${i}`} />
                <i className="bx bxl-instagram"></i>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                ></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
