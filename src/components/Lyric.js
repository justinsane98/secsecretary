import React from "react";

const Lyric = function (props) {
  return (
    <div
      style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
      className="lyric text-white-75 text-base 425px:text-base 768px:text-lg 1024px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 w-3/4 375px:w-full"
    >
      {props.content}
    </div>
  );
};

export default Lyric;
