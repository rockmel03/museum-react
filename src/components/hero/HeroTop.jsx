import React from "react";

const HeroTop = () => {
  return (
    <div className="hero__top min-h-[45vh] md:min-h-[60vh] p-2 md:p-5 flex flex-col justify-end">
      <div className="hero__top-heading overflow-hidden  md:hidden sm:block">
        <h3 className="text-lg mb-2">(Juan Manuel Blanes)</h3>
      </div>
      <div className="hero__top-heading overflow-hidden">
        <h1 className=" text-[11vw] md:text-[6rem] lg:text-[9rem] font-medium leading-[0.85em] md:leading-[5.5rem] lg:leading-[7.5rem] tracking-[-0.08em] md:tracking-[-0.05em]">
          RESURGENCE OF
        </h1>
      </div>
      <div className="hero__top-heading overflow-hidden">
        <h1 className=" text-[11vw] md:text-[6rem] lg:text-[9rem] font-medium leading-[0.85em] md:leading-[5.5rem] lg:leading-[7.5rem] tracking-[-0.08em] md:tracking-[-0.05em]">
          THE HOMELAND
        </h1>
      </div>
    </div>
  );
};

export default HeroTop;
