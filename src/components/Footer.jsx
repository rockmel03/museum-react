import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-5 py-10 flex items-center justify-between gap-2">
      <h2 className=" text-sm md:text-xl font-bold">
        <a href="/">arte_education. </a>
      </h2>
      <h3 className="text-sm md:text-xl font-semibold md:absolute left-1/2 md:-translate-x-1/2">
        Made by ++ <span className="hidden md:inline">hellohello</span>
      </h3>
      <div className="flex items-center justify-center gap-1 md:gap-3">
        <h3 className="hidden md:block md:text-xl font-bold">Follow us</h3>
        <a href="#" className="text-2xl md:text-3xl">
          <i className="ri-instagram-line"></i>
        </a>
        <a href="#" className="text-2xl md:text-3xl">
          <i className="ri-facebook-fill"></i>
        </a>
        <a href="#" className="text-2xl md:text-3xl">
          <i className="ri-youtube-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
