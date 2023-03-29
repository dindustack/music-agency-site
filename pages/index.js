import React from "react";
import Header from "../components/Header";
import ImageSwiperSlider from "../components/ImageSwiperSlider";
import About from "../components/About";
import Concepts from "../components/Concepts";
import Publications from "../components/Publications";
import Awards from "../components/Awards";
import Office from "../components/Office";

export default function HomePage() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <ImageSwiperSlider />
      <About />
      <Concepts />
      <Publications />
      <Awards />
      <Office />
    </div>
  );
}
