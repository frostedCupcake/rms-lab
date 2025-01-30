"use client";

import { motion } from "framer-motion";
import React from "react";

import { staggerContainer, textVariant } from "../utils/motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  EffectCube,
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
} from "swiper";
import { homeImagesData } from "../constants";

const HomeCarousel = () => {
  return (
    <div
      variants={textVariant(0.3)}
      className="flex justify-center items-center h-[24rem] w-[90vw] bg-transparent mx-auto lg:mt-[3rem] "
    >
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        // navigation={true}
        height={"auto"}
        // pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="py-[3rem] w-[90vw] lg:w-[60rem]  bg-transparent mx-auto"
      >
        {homeImagesData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative  lg:w-[42rem] w-full my-auto mx-auto rounded-t-lg md:rounded-lg ">
              <img
                src={item.url}
                className={
                  "overflow-hidden  lg:h-[22rem]  rounded-t-lg md:rounded-lg w-full lg:w-[42rem] mx-auto bg-transparent  transition-all"
                }
                alt={`equipment ${i}`}
                lazy={"true"}
              />
              <div className="rounded-b-lg md:h-full w-full md:absolute md:bottom-0 opacity-100 md:opacity-0 md:hover:opacity-100 transition-all ">
                <p className="text-center rounded-b-lg relative md:absolute md:bottom-0  text-[.8rem] md:text-[1rem] text-white w-full px-3 bg-black/50 py-1 h-[3rem] md:h-[3rem]">
                  <span className="absolute text-white/80 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full">
                    {item.name}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
