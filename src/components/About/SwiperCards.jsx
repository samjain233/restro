import React from "react";
import img1 from "../../asset/images/about/1.jpg";
import img2 from "../../asset/images/about/2.jpg";
import img3 from "../../asset/images/about/3.jpg";
import img4 from "../../asset/images/about/4.jpg";
import img5 from "../../asset/images/about/5.jpg";
import img6 from "../../asset/images/about/6.jpg";
import img7 from "../../asset/images/about/7.jpg";
import img8 from "../../asset/images/about/8.jpg";
import img9 from "../../asset/images/about/9.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "./styles.css";

import { Autoplay, EffectCards, Pagination } from "swiper/modules";

const imgProperty = "object-cover w-full h-full";
let width = window.screen.width;
let mobile = true;
if (width > 640) mobile = false;

const SwiperCards = () => {
  return (
    <>
      <div className="about">
        {!mobile && (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="" className={imgProperty} loading="lazy"/>
            </SwiperSlide>
          </Swiper>
        )}
        {mobile && (
          <Swiper
            style={{
              "--swiper-pagination-color": "#f14a41",
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="" className={imgProperty} loading="lazy" />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </>
  );
};

export default SwiperCards;
