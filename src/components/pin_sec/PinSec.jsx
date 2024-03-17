import React from "react";
import ArrowTouch from "./ArrowTouch";

const PinSec = () => {
  return (
    <section>
      <ArrowTouch />
      <div className="w-full h-screen bg-white text-primary relative z-10">
        <div className="absolute top-0 z-10 w-full h-[8px]">
          <div className="w-[10%] h-full  bg-red-300"></div>
        </div>
        <div className="w-full h-full p-5">
          <h2 className=" text-2xl capitalize">
            [ 1 ] <span>white women</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-[20vw] h-[20vw] md:py-5 bg-zinc-500 rounded-full overflow-hidden">
              <img
                src="/img1.webp"
                alt=""
                className="w-screen h-screen object-cover object-center"
              />
            </div>
          </div>
          <p className="font-serif md:py-5 md:text-3xl md:font-medium md:w-[45%] ">
            In the foreground, we see a woman with Caucasian features
            representing the homeland—a white, pure, radiant, and civilized
            homeland ascending triumphantly. Created in the image and likeness
            of a Europe that embodies everything the nation should admire and
            pursue for success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PinSec;
