import React from "react";

function Button(props) {
  return (
    <button
      style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
      className="font-serif text-lg uppercase bg-pink shadow py-2 px-4 mt-2 shadow-default border-0 text-white hover:bg-pink-dark active:bg-pink-light focus:bg-pink-400 hover:cursor-pointer"
    >
      {props.content}
    </button>
  );
}

export default Button;
