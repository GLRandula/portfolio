import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[350px] lgl:h-[476px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[450px] lgl:h-[500px] bg-gradient-to-r from-[#1f2744] to-[#40254b] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner