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
import "swiper/css/effect-cube";

// import required modules
import {
  EffectCube,
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  FreeMode,
} from "swiper";
import { equipments } from "../constants";

const Equipments = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto "
    >
      <motion.h1
        variants={textVariant(0.2)}
        className="text-black text-2xl md:text-4xl font-medium capitalize underline mx-auto text-center"
      >
        Equipments
      </motion.h1>
      <motion.div
        variants={textVariant(0.3)}
        className="flex justify-center items-center h-[18rem] w-[15rem] md:w-[90vw] bg-transparent mx-auto mt-[3rem] "
      >
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          effect={"coverflow"}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={40}
          height={"auto"}
          breakpoints={{
            600: {
              slidesPerView: "3",
              centeredSlides: true,
            },
          }}
          coverflowEffect={{
            slideShadows: true,
            rotate: 30,
            stretch: 10,
            depth: 300,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="py-[3rem] w-[60rem]  bg-transparent"
        >
          {Object.keys(equipments).map((key, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[18rem] w-[15rem]">
                <img
                  src={equipments[key]}
                  className={
                    "overflow-hidden rounded-lg  h-[18rem] w-[15rem] bg-transparent  transition-all"
                  }
                  alt={`equipment ${i}`}
                  lazy={"true"}
                />
                <div className="rounded-b-lg h-[18rem] w-[15rem]  absolute bottom-0 md:opacity-0 opacity-100 md:hover:opacity-100 transition-all ">
                  <p className="text-center rounded-b-lg absolute bottom-0 text-[1rem] md:text-[1rem] text-white w-full px-3 bg-black/50 py-1 h-[4rem] ">
                    <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full">
                      {key}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p> </p>
      </motion.div>
    </motion.div>
  );
};

export default Equipments;
