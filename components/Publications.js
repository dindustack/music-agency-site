import React from "react";
import Image from "next/image";

import publish from "../images/publications.png";

export default function Publications() {
  return (
    <div className="relative font-neutralFace">
      <div className="px-3">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex text-xl md:text-4xl my-3 font-bold justify-between mb-36 w-full">
          <div>meet us</div>
          <div>services</div>
          <div>all work</div>
        </div>
      </div>
      <div className="bg-[#E7E7E7] pb-[20vh]">
        <div className="h-[100vh] w-full flex flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center flex-col px-3 text-black w-full md:w-[50%]">
            <div className="h-[90%] flex items-center justify-center flex-col">
              <div className="text-lg">(PB.001 - 21)</div>
              <h1 className="text-4xl my-6 font-bold">
                uncompromised creativity
              </h1>
              <p className="underline">explore publication</p>
            </div>
            <div className="h-[10%] flex w-full justify-center items-center flex-col">
              <div className="w-full h-[2px] bg-black"></div>
              <div className="text-4xl my-3 font-bold">our publications</div>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex items-center justify-center bg-[#E7E7E7] md:bg-black h-full">
            <Image alt="" src={publish} className="w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
