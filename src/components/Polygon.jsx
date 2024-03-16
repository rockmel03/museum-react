import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Polygon = () => {
  // clip-path: polygon(0px 0px, 100% 0px, 100% 70%, 100% 100%, 0px 100%, 0px 70%);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".clip", {
      duration: 1,
      clipPath:
        "polygon(0px 0px, 100% 0px, 100% 70%, 100% 100%, 0px 100%, 0px 70%)",
      scrollTrigger: {
        trigger: `.clip`,
        //   markers: true,
        start: "50% 90%",
        end: "50% 20%",
        scrub: 2,
      },
    });
    gsap.from(".clip img", {
      scale: 2.5,
      scrollTrigger: {
        trigger: `.clip`,
        //   markers: true,
        start: "50% 90%",
        end: "50% 20%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section className="w-full min-h-screen py-[20vh] flex flex-col items-center justify-center">
      <div
        style={{
          clipPath:
            "polygon(0px 0px, 100% 0px, 58.0181% 70%, 58.0181% 100%, 41.9819% 100%, 41.9819% 70%)",
        }}
        className="clip w-[58%] h-[70vh] overflow-hidden mb-24"
      >
        <img
          src="/img1.webp"
          alt=""
          className="w-full h-full object-cover object-center scale-[1.5]"
        />
      </div>
      <h1 className="text-5xl font-serif">Share</h1>
    </section>
  );
};

export default Polygon;
