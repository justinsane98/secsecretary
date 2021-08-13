import React from "react";

const Paragraph = function (props) {
  return (
    <p
      style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
      className="text-white text-xs 425px:text-base 768px:text-lg font-normal font-serif leading-loose z-10 mb-4"
    >
      {props.content}
    </p>
  );
};

export default Paragraph;
