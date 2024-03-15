import React from "react";

const Video = () => {
  return (
    <section className="video">
      <h2 className=" text-3xl mb-5">(6) Related videos</h2>
      <div className="flex p-5 gap-5">
        <div className="flex-1 overflow-hidden relative">
          <img
            src="/thumbnail1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="w-[3em] h-[3em] text-xl border-[1px] border-white rounded-full grid place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <i className="ri-play-large-fill"></i>
          </span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <img
            src="/thumbnail2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <span className="w-[3em] h-[3em] text-xl border-[1px] border-white rounded-full grid place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <i className="ri-play-large-fill"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Video;
