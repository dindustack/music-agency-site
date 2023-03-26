import React from "react";
import Header from "../components/Header";
import ImageSwiperSlider from "../components/ImageSwiperSlider";

export default function HomePage() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <ImageSwiperSlider />
    </div>
  );
}
