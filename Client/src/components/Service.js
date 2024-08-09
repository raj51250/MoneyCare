import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; 
import "../styles/Service.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow, Autoplay } from "swiper";
import Img1 from "../img/1.png";
import Img2 from "../img/2.png";
import Img3 from "../img/3.png";
import Img4 from "../img/4.png";
import Img5 from "../img/5.png";
import Img6 from "../img/6.png";

const Service = () => {
  return (
    <div className="swiper-container">
      <h2 className="service-title">Our Services</h2>
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <img src={Img1} alt="Service 1" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="Service 2" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="Service 3" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="Service 3" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt="Service 3" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt="Service 3" className="swiper-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Service;
