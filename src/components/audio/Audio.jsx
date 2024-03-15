import React from "react";

const AudioElement = ({ data }) => {
  return (
    <div className="relative flex items-center justify-between h-[20vh] px-5 border-b-[1px] first:border-t-[1px] border-y-white before:w-0 before:h-full before:absolute before:top-0 before:left-0 before:bg-white before:duration-[.5s] hover:before:w-full hover:text-primary hover:pl-10 duration-200 cursor-pointer">
      <div className="flex items-center gap-[2em]">
        <span className="h-[3em] w-[3em] text-xl relative border-[--color-white] border-[1px] rounded-full bg-[--color-black] text-[--color-white] z-10">
          <i className="ri-play-large-fill absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i>
        </span>
        <h2 className="text-6xl uppercase font-medium z-10">{data.title} </h2>
        <sup className="text-[1.2em] lowercase font-normal font-['untitled-serif']">
          {data.audio.duration}
        </sup>
      </div>
      <p className="text-3xl font-medium font-serif z-10 capitalize">
        {data.description}
      </p>
    </div>
  );
};

const Audio = () => {
  let data = [
    {
      title: " Adults",
      description: " patricia lannice educator's voice",
      audio: {
        url: "",
        duration: "3:59min",
      },
    },
    {
      title: " Adults",
      description: "monica michelena, charrua rep.",
      audio: {
        url: "",
        duration: "5:58min",
      },
    },
    {
      title: " children",
      description: " mariana valdes, artey Educator's Voice",
      audio: {
        url: "",
        duration: "3:59min",
      },
    },
  ];

  return (
    <section data-scroll-section className="audio pt-[20vh] ">
      {data.map((item, idx) => (
        <AudioElement data={item} key={idx} />
      ))}
    </section>
  );
};

export default Audio;
