import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import award1 from "../images/award1.png";
import award2 from "../images/award2.png";
import award3 from "../images/award3.png";
import award4 from "../images/award4.png";
import award5 from "../images/award5.png";
import award6 from "../images/award6.png";

export default function Awards() {
  return (
    <div className="relative font-neutralFace">
      <div className="bg-[#E7E7E7] text-black h-[80vh]">
        <div className="px-3 py-2">
          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex justify-between w-full text-xs py-2">
            <div>bold</div>
            <div>culturally connected</div>
            <div>inclusive</div>
          </div>
          <div className="my-28">
            <div className="text-sm md:text-xl">(OUR AWARDS)</div>
            <div className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug indent-[25vw] my-2">
              not for our egos, but because awards are a measure of creativity,
              originality and quality. aiming for awards pushes us to think
              deeper, go further and have meaningful conversations about what
              creativity is.
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] sm:h-[70vh] bg-black text-[#e7e7e7]">
        <div className="flex items-center justify-center w-full h-full text-center text-7xl sm:text-9xl md:text-[10rem] xl:text-[16rem] leading-none">
          <h1 className="-mt-[50vh] mix-blend-difference">
            we play <br /> to win
          </h1>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="absolute top-[35%] right-[10%]">
          <Image
            alt=""
            src={award1}
            className="h-28 sm:h-44 md:h-80 z-10 object-contain"
          />
        </div>

        <div className="absolute bottom-[15%] left-[15%]">
          <Image
            alt=""
            src={award2}
            className="h-28 sm:h-44 md:h-80 z-10 object-contain"
          />
        </div>

        <div className="absolute bottom-[50%] left-[20%]">
          <Image
            alt=""
            src={award3}
            className="h-28 sm:h-44 md:h-80 z-10 object-contain"
          />
        </div>

        <div className="absolute bottom-[30%] left-[60%]">
          <Image
            alt=""
            src={award4}
            className="h-28 sm:h-32 md:h-52 z-10 object-contain"
          />
        </div>

        <div className="absolute right-[50%] bottom-[30%]">
          <Image
            alt=""
            src={award5}
            className="h-28 sm:h-44 md:h-80 z-10 object-contain"
          />
        </div>

        <div className="absolute bottom-[15%] right-[35%]">
          <Image
            alt=""
            src={award6}
            className="h-28 sm:h-32 md:h-48 z-10 object-contain"
          />
        </div>
      </div>

      {/* Swiper for awards in mobile view */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        className="w-full block lg:hidden flex flex-row font-neutralFace"
      >
        <SwiperSlide>
          <Image alt="" src={award1} className="h-28 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={award2} className="h-28 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={award3} className="h-28 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={award4} className="h-28 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={award5} className="h-28 object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={award6} className="h-28 object-contain" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
