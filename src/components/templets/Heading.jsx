import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Heading = ({ heading }) => {
  const containerRef = useRef();
  gsap.registerPlugin(useGSAP);

  const createId = () => {
    if (heading.trim().split(" ").length > 0) {
      return heading.trim().split(" ").join("-").toLowerCase();
    } else {
      return heading.trim().split("").join("-").toLowerCase();
    }
  };

  const containerId = createId();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(`#${containerId} .heading h1`, {
        y: 110,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#${containerId} .heading`,
          //   markers: true,
          start: "50% 85%",
          end: "50% 30%",
        },
      });
    },
    { scope: containerRef }
  );
  return (
    heading && (
      <div
        id={containerId}
        ref={containerRef}
        className=" min-h-[25vh] md:min-h-[60vh] p-2 md:p-5 flex flex-col justify-end"
      >
        {heading.split(" ").map((item, idx) => (
          <div key={idx} className="heading overflow-hidden">
            <h1 className=" text-[11vw] md:text-[6rem] lg:text-[9rem] font-medium leading-[0.9em] md:leading-[5.5rem] lg:leading-[7.5rem] tracking-[-0.08em] md:tracking-[-0.05em] uppercase">
              {item.split("_").join(" ")}
            </h1>
          </div>
        ))}
      </div>
    )
  );
};

export default Heading;
