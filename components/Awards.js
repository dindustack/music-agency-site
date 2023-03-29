import React from "react";
import Image from "next/image";

import award1 from "../images/award1.png"
import award2 from "../images/award2.png"
import award3 from "../images/award3.png"
import award4 from "../images/award4.png"
import award5 from "../images/award5.png"
import award6 from "../images/award6.png"

export default function Awards() {
  return (
    <div className="relative font-neutralFace">
      <div className="bg-[#E7E7E7] text-black h-[80vh]">
        <div className="px-3 py-2">
          <div className="w-full h-[1px] bg-black">
            <div className="flex justify-between w-full text-xs py-2">
              <div>bold</div>
              <div>culturally connected</div>
              <div>inclusive</div>
            </div>
            <div className="my-28">
              <div className="text-sm md:text-xl">(OUR AWARDS)</div>
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug indent-[25vw] my-2">
                not for our egos, but because awards are a measure of
                creativity, originality and quality. aiming for awards pushes us
                to think deeper, go further and have meaningful conversations
                about what creativity is.
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50vh] sm:h-[70vh] bg-black text-[#E7E7E7]">
          <div className="flex items-center justify-center w-full h-full text-center text-7xl sm:text-9xl md:text-[10rem]">
            <h1 className="-mt-[50vh] mix-blend-difference">
              we play <br /> to win
            </h1>
          </div>
        </div>
        <div className="absolute top-[35%] right-[10%]">
          <Image alt=""src={award1} className="h-28 sm:h-44 md:h-80 z-10 object-contain"
/>
        </div>
      </div>
    </div>
  );
}
