import React from "react";
import touchIcon from "../../assets/Icons/touch.svg";
import arrow from "../../assets/Icons/arrow.svg";

const ArrowTouch = () => {
  return (
    <div className="relative py-10 flex gap-10 flex-col items-center justify-center px-5">
      <div className="w-[1px] bg-white h-[20vh]"></div>
      <h2 className="text-center font-serif font-medium text-4xl">
        In the following section,
        <br /> hold the cursor down to <br />
        reveal the complete work.
      </h2>
      <div className="w-10 h-10 flex-shrink-0 rounded-full text-2xl bg-white text-black flex items-center justify-center">
        <span>+</span>
      </div>
      <img src={touchIcon} alt="" />
      <div className="h-fit overflow-hidden">
        <img id="arrow-img" src={arrow} alt="" className=" animate-bounce" />
      </div>
    </div>
  );
};

export default ArrowTouch;
