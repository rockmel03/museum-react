import React from "react";

const ShowInfo = ({ title, discription }) => {
  return (
    <section
      data-scroll-section
      className="intro w-full h-screen flex items-center justify-center px-5 py-[5vw] font-serif"
    >
      <div className="flex-1 px-3">
        <h4 data-scroll data-scroll-speed="-0.3" className="text-3xl">
          {title}
        </h4>
      </div>
      <div data-scroll className="intro__desc flex-1 px-3">
        {typeof discription == "string" ? (
          <p className="text-3xl font-base">{discription}</p>
        ) : (
          discription?.map((item, i) => (
            <p key={i} className="text-3xl font-base">
              {item}
            </p>
          ))
        )}
      </div>
    </section>
  );
};

export default ShowInfo;
