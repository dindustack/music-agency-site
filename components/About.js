import React from "react";

export default function About() {
  return (
    <div className="relative my-10 px-3 py-2 h-[80vh] font-neutralFace">
      <div className="w-full h-[1px] bg-white"></div>
      <div className="flex justify-between w-full text-xs py-2">
        <div>Who We Are</div>
        <div>Who We Are</div>
        <div>Who We Are</div>
      </div>
      <div className="my-28">
        <div className="text-sm md:text-xl">(CHINWENDU AGBAETUO)</div>
        <div className="text-3xl md:text-5xl font-bold leading-snug indent-[30vw] my-2">
          an independent music agency that makes stories with music. working
          closely with our clients and our curated global network of artists, we
          strategise, produce, find and license the best music.
        </div>
      </div>
    </div>
  );
}
