import React from "react";

const Navbar = () => {
  return (
    <nav className="relative w-full h-[10vh] flex items-center justify-between text-xl p-2">
      <h3 className="">
        <a href="/">Museums for the 21st Century</a>
      </h3>
      <h4 className="absolute left-1/2 -translate-x-1/2">(Uruguay)</h4>
      <h3>(Juan Manuel Blanes)</h3>
    </nav>
  );
};

export default Navbar;
