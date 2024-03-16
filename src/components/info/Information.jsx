import React, { useEffect } from "react";
import Heading from "../templets/Heading";

const Information = ({ id, heading, image, title, description }) => {
  useEffect(() => {
    console.log();
  }, []);

  return (
    <section id={id} data-scroll className="historical-context">
      {heading && <Heading heading={heading} />}
      {image && (
        <div className=" flex items-center justify-end md:justify-center">
          <div className="w-full max-w-[75%] md:max-w-[40%] ">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}
      {title && description && (
        <div className="intro w-full h-screen flex items-start md:items-center justify-center flex-col md:flex-row md:px-5 py-[5vw] font-serif">
          <div className="flex-1 px-3 flex items-center">
            <h4
              data-scroll
              data-scroll-speed={window.innerWidth > 780 ? "-0.3" : "0"}
              className=" text-xl lg:text-3xl mb-5"
            >
              {title}
            </h4>
          </div>
          <div data-scroll className="intro__desc flex-1 px-3">
            {typeof description == "string" ? (
              <p className="text-3xl font-base">{description}</p>
            ) : (
              description?.map((item, i) => (
                <p key={i} className=" text-xl  lg:text-3xl font-base">
                  {item}
                </p>
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Information;
