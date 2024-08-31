"use client";
import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//Import img
import img1 from "../../../public/img/assets/img1.jpg";
import img2 from "../../../public/img/assets/img2.webp";
import img3 from "../../../public/img/assets/img3.jpg";
import img4 from "../../../public/img/assets/img4.jpg";
import img5 from "../../../public/img/assets/img5.jpg";
import img6 from "../../../public/img/assets/img6.jpg";
import img7 from "../../../public/img/assets/img7.jpg";
//Import next fuction
import Image from "next/image";

// import required modules
import {EffectCoverflow, Pagination} from "swiper/modules";

export default function CarrucelResponsive() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img7} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
