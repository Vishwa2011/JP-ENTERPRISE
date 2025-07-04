import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Facility() {
  const facilities = [
    { icon: 'flaticon-tracking', title: 'Free Shipping ' },
    { icon: 'flaticon-return', title: 'Easy Return Policy' },
    { icon: 'flaticon-shuffle', title: '7 Day Exchange Policy' },
    { icon: 'flaticon-sale', title: 'Weekend Discount Coupon' },
    { icon: 'flaticon-credit-card', title: 'Secure Payment Methods' },
    { icon: 'flaticon-location', title: 'Track Your Package' },
    { icon: 'flaticon-customer-service', title: '24/7 Customer Support' },
  ];

  return (
    <div>

    <section className="facility-area pb-70">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="facility-swiper"
        >
          {facilities.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="single-facility-box">
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  );
}
