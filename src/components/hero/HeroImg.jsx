import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const HeroImg = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero__img-overlay  img", {
      scale: 2,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: " .hero__img-overlay",
        // markers: true,
        start: "50% 85%",
        end: "50% 70%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="hero__img-overlay h-full relative overflow-hidden">
      <img
        src="/img1.webp"
        alt=""
        className="hero___img w-full h-full object-cover object-center origin-[40%_50%]"
      />
      <div className="hero__img-overlay--center w-full h-1/3 absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden">
        <img
          src="/img1.webp"
          alt=""
          className="hero___img--center w-full h-full object-cover object-center origin-[80%_50%]"
        />
      </div>
    </div>
  );
};

export default HeroImg;
