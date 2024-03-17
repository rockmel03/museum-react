import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Cursor = () => {
  useGSAP(() => {
    window.addEventListener("mousemove", (dets) => {
      gsap.to("#cursor", {
        x: dets.clientX + "px",
        y: dets.clientY + "px",
        zIndex: 9,
        duration: 0.5,
      });
    });
  }, []);

  return (
    <div
      id="cursor"
      className="cursor w-4 h-4 rounded-full bg-zinc-50 fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    ></div>
  );
};

export default Cursor;
