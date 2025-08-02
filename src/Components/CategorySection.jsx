// CategorySlider.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const categories = [
  { title: 'Ultrasonic Repellents', img: '/assets/pics/rate.jpg' },
  { title: 'Natural Rat Repellents', img: '/assets/pics/rate.jpg' },
  { title: 'Electronic Devices', img: '/assets/pics/rate.jpg' },
  { title: 'Indoor Rat Control', img: '/assets/pics/rate.jpg' },
  { title: 'Outdoor Rat Solutions', img: '/assets/pics/rate.jpg' },
  { title: 'Industrial Use Products', img: '/assets/pics/rate.jpg' },
  { title: 'Vehicle Rat Protection', img: '/assets/pics/rate.jpg' },
  { title: 'Eco-Friendly Repellents', img: '/assets/pics/rate.jpg' },
];


const CategorySlider = () => {
  return (
    <div className="popular">
    

   
       <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
            centeredSlides: false,
          },
          980: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 30,
            centeredSlides: false,
            loop: false,
          },
          1600: {
            slidesPerView: 8,
            spaceBetween: 30,
            centeredSlides: false,
            loop: false,
          },
        }}
        className="swiper-container"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <a href="#" className="slide-link">
              <img src={cat.img} alt={cat.title} />
              <h5 className="slide-title">{cat.title}</h5>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CategorySlider;
