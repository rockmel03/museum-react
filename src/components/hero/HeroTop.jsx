import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { stagger, useAnimate } from "framer-motion";

const HeroTop = () => {
  // useGSAP(() => {
  //   gsap.from(".hero__top-heading h1", {
  //     y: 110,
  //     duration: 0.6,
  //     stagger: 0.2,
  //   });
  // }, []);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("h1", { y: "100" }, { delay: stagger(0.5) });
  }, []);

  return (
    <div
      ref={scope}
      className="hero__top min-h-[63vh] p-5 flex flex-col justify-end"
    >
      <div className="hero__top-heading overflow-hidden">
        <h1 className="text-[9rem] font-medium leading-[7.5rem] tracking-tighter">
          RESURGENCE OF
        </h1>
      </div>
      <div className="hero__top-heading overflow-hidden">
        <h1 className="text-[9rem] font-medium leading-[7.5rem] tracking-tighter">
          THE HOMELAND
        </h1>
      </div>
    </div>
  );
};

export default HeroTop;
