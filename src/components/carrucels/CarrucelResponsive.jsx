"use client";
import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//Import img
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
//Import next fuction
import Image from "next/image";

// import required modules
import {EffectCoverflow, Pagination} from "swiper/modules";

export default function CarrucelResponsive() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-5">
        <SwiperSlide>
          <Image height={700} width={700} src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={300} width={300} src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={300} width={300} src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={300} width={300} src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={300} width={300} src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={300} width={300} src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={300} width={300} src={img7} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
