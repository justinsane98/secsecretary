import React from "react";


const Hamburger = ({menuopen}) => {

return (
  <nav className="navigation absolute z-50 top-4 right-4 375px:top-8 375px:right-8 768px:top-10">
      <div className="w-12 768px:mr-10 768px:mt-1 hover:cursor-pointer hover:bg-pink border-transparent border-2 hover:border-pink-dark p-2 active:bg-pink-dark">
        <div className={"bg-white h-1 mb-2 shadow relative " + (menuopen ? "rotate-45 top-3" : "")}></div>
        <div className={"bg-white h-1 mb-2 " + (menuopen ? "bg-transparent" : "shadow")}></div>
        <div className={"bg-white h-1 mb-0 shadow relative " + (menuopen ? "-rotate-45 -top-3" : "")}></div>
      </div>
  </nav>
  
)};

export default Hamburger;
