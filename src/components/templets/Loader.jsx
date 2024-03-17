import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { animate } from "framer-motion";

const Loader = () => {
  const [counter, setCounter] = useState(0);
  let val = 0;

  let increaseCounter = () => {
    const interval = setInterval(() => {
      val += 4;
      setCounter(val);
      if (val >= 100) {
        setCounter(100);
        clearInterval(interval);
      }
    }, 100);
  };

  // useGSAP(() => {
  //   gsap.to(".loader", {
  //     duration: 1,
  //     delay: 2,
  //     display: "none",
  //     y: "-100%",
  //     ease: "power1.inOut",
  //   });
  // }, []);

  useEffect(() => {
    increaseCounter();
  }, []);

  return (
    <div className="loader w-screen h-screen px-5 md:px-10 py-5 bg-white text-primary fixed top-0 left-0 z-[99] flex items-end">
      <h1 className="text-8xl md:text-[10vw] font-semibold">{counter}</h1>
    </div>
  );
};

export default Loader;
