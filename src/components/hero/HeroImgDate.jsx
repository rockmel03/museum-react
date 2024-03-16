import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Number = ({ number }) => {
  return (
    <div
      style={{ transform: `translateY(-${number}em)` }}
      className="hero__num-wrapper text-[10em] flex flex-col items-center font-serif tracking-tighter"
    >
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  );
};

const HeroImgDate = ({ data = "1898" }) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero__num-wrapper", {
      transform: `translateY(0)`,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        scroller: "body",
        trigger: " .hero__num-wrapper",
        triggerAction: "restart",
        // markers: true,
        start: "50% 85%",
      },
    });
  }, []);

  return (
    <div className="hero__date_wrapper flex-shrink-0 flex flex-row w-fit h-[9em] text-[3vw] md:text-[2vw] font-medium leading-none overflow-hidden">
      {data.split("")?.map((num, idx) => (
        <Number key={idx} number={num} />
      ))}
    </div>
  );
};

export default HeroImgDate;
