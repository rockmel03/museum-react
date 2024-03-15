import React from "react";

const Container = ({ children, className, ...props }) => {
  return (
    <div className={`w-full mx-auto max-w-screen-2xl ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
