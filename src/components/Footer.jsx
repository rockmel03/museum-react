import React from "react";

const Footer = () => {
  return (
    <footer className="relative px-5 py-10 flex items-center justify-between gap-2">
      <h2 className="text-xl font-bold">
        <a href="/">arte_education. </a>
      </h2>
      <h3 className="text-xl font-semibold absolute left-1/2 -translate-x-1/2">
        Made by ++hellohello
      </h3>
      <div className="flex items-center justify-center gap-3">
        <h3 className="text-xl font-bold">Follow us</h3>
        <a href="#" className="text-3xl">
          <i className="ri-instagram-line"></i>
        </a>
        <a href="#" className="text-3xl">
          <i className="ri-facebook-fill"></i>
        </a>
        <a href="#" className="text-3xl">
          <i className="ri-youtube-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
