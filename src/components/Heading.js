import React from "react";

const Heading = function (props) {
  return (
    <h2
    style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
      className={"bg-clip-text text-transparent bg-gradient-to-bl from-pink-90 via-white-75 to-blue-75  heading text-5xl 425px:text-6xl 768px:text-7xl my-2 768px:mt-0 768px:mb-0 inline-block font-thin font-display " + props.className}
    >
      {props.content}
    </h2>
  );
};

export default Heading;
