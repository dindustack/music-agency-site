import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

/**
 *
 * @returns Images
 */
import imageSlider1 from "../images/imageSlider1.png";
import imageSlider2 from "../images/imageSlider2.png";
import imageSlider3 from "../images/imageSlider3.png";
// import imageSlider4 from "../images/imageSlider4.png"
import imageSlider5 from "../images/imageSlider5.png";
import imageSlider6 from "../images/imageSlider6.png";

export default function ImageSwiperSlider() {
  const [slides, setSlides] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;

    const calculatedWidth = width;

    calculatedWidth < 768 ? setSlides(1.2) : setSlides(1.5);
  }, []);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={slides}
        grabCursor={true}
        className="w-full font-neutralFace h-[50vh] md:h-[65vh] relative mt-[40vh] md:mt-[33vh]"
      >
        {/* Silde 1 */}
        <SwiperSlide className="flex justify-start flex-col w-fit">
          <div className="h-[100%] flex items-end">
            <Image
              alt=""
              src={imageSlider1}
              className="w-full md:w-[80%] h-[100%] object-contain"
            />
          </div>
          <div className="flex justify-between items-end h-[100%]">
            <div className="flex flex-col justify-between h-full py-1 px-2">
              <p className="uppercase">multiple</p>
              <p>(01)</p>
            </div>
            <div className="text-5xl font-bold md:text-7xl lg:text-9xl 2xl:text-[12rem] leading-none uppercase">
              malta
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
