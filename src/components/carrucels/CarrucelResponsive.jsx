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
import img3 from "../../../public/img/assets/img3.webp";
import img4 from "../../../public/img/assets/img4.webp";
import img5 from "../../../public/img/assets/img5.webp";
import img6 from "../../../public/img/assets/img6.webp";
import img7 from "../../../public/img/assets/img7.jpg";
import img8 from "../../../public/img/assets/img8.webp";
import img9 from "../../../public/img/assets/img9.webp";
import img10 from "../../../public/img/assets/img10.webp";
import img11 from "../../../public/img/assets/img11.webp";
import img12 from "../../../public/img/assets/img12.webp";
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
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img11} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperResponsive">
          <Image className="img-size" height={300} width={300} src={img12} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
