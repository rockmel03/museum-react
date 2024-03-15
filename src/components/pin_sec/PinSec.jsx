import React from "react";
import ArrowTouch from "./ArrowTouch";

const PinSec = () => {
  return (
    <section>
      <ArrowTouch />
      <div className="w-full h-screen bg-white text-primary">
        <div className="w-full h-full p-5">
          <h2 className=" text-2xl capitalize">
            [ 1 ] <span>white women</span>
          </h2>
          <p className="font-serif">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            deleniti officiis, soluta voluptas dolor molestiae corporis maxime
            vel voluptates ea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PinSec;
