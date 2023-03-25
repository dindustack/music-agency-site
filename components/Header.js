import React from "react";

import close from "../images/close-outline.svg"
import Image from "next/image"

export default function Header() {
  let resMenu = useRef(null)
  let resMenuHeader = useRef(null)
  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black"
      >
        <div
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Chinwendu <br />
            Agbaetuo
          </div>
          <div className="block md:hidden cursor-pointer mx-[5px]">
            <Image src={close} className="w-9 object-contain invert" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
