import React from "react";
import HeroTop from "./HeroTop";
import HeroImg from "./HeroImg";
import HeroImgDate from "./HeroImgDate";

const Hero = () => {
  return (
    <section data-scroll-section className="hero w-full">
      <HeroTop />
      <HeroImg />
      <div className="hero__img-info w-full flex gap-5 items-end px-5 py-10">
        <HeroImgDate />
        <h3 className="text-3xl font-medium">(Date of artwork)</h3>
      </div>
    </section>
  );
};

export default Hero;
