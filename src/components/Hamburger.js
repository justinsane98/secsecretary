import React from "react";

const Hamburger = ({menuopen}) => {
var p = window.location.pathname;
var themeClasses = "";

if(p === "/fire/"){
  themeClasses = "hover:bg-red hover:border-red-dark active:bg-red-dark"
} else if(p === "/scotty/"){
  themeClasses = "hover:bg-yellow hover:border-yellow active:bg-yellow"
}
else if(p === "/invoices/"){
  themeClasses = "hover:bg-indigo-dark hover:border-indigo-dark active:bg-indigo"
}
else {
  themeClasses = "hover:bg-pink hover:border-pink-dark active:bg-pink-dark"
}

return (
  <nav className={"navigation z-50 top-4 right-4 375px:top-8 375px:right-8 768px:top-10 " + (menuopen ? "fixed" : "absolute")}>
      <div className={"w-12 768px:mr-10 768px:mt-1 hover:cursor-pointer border-transparent border-2 p-2" + ` ${themeClasses}`}>
        <div className={"bg-white h-1 mb-2 shadow relative " + (menuopen ? "rotate-45 top-3" : "")}></div>
        <div className={"bg-white h-1 mb-2 " + (menuopen ? "bg-transparent" : "shadow")}></div>
        <div className={"bg-white h-1 mb-0 shadow relative " + (menuopen ? "-rotate-45 -top-3" : "")}></div>
      </div>
  </nav>
  
)};

export default Hamburger;
