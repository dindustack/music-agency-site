import React from "react";
import Image from "next/image";

import office from "../images/home-office.png"

export default function Office() {
  return (
    <div className="relative h-fit font-neutralFace w-full py-5 px-3">
      <div className="w-full h-[2px] bg-white"></div>
      <div className="py-10 flex flex-col">
        <h1 className="text-5xl md:text-7xl font-bold">
          Unleash new levels of <br /> creativity
        </h1>
        <div className="flex my-2 items-end w-full justify-end">
          <h1 className="text-3xl md:text-5xl font-bold mx-4 lg:mx-10">
            office
          </h1>
          <Image src={office} alt="" className="w-[50vw]"  />
        </div>
        <h1 className="text-2xl md:text-7xl font-bold flex items-start">
          amsterdam
          <span className="text-xl font-normal mt-2 mx-5">(9:34 pm)</span>
        </h1>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className="flex flex-col lg:flex-row justify-between py-10 pb-32">
        <div className="text-lg">
          (lets hear <br /> something)
        </div>
        <div className="text-2xl md:text-3xl lg:text-8xl font-bold">dindustack.com</div>
      </div>
      <div className="w-full h-[3px] bg-white"></div>
    </div>
  );
}
