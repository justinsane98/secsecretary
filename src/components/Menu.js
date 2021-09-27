import React, { Fragment } from "react";
import MenuItem from "./MenuItem"

const Menu = ({menuOpen}) => {
  var  p = "";
  if (typeof window !== 'undefined') {
    p = window.location.pathname;
  } 
  var themeClasses = "";

  if(p === "/fire/"){
    themeClasses = "bg-red"
  } else if(p === "/scotty/"){
    themeClasses = "bg-yellow-dark"
  }
  else if(p === "/invoices/"){
    themeClasses = "bg-indigo-dark"
  }
  else {
    themeClasses = "bg-pink"
  }
  return(
  <Fragment>
    <div className={"px-4 375px:px-8 768px:px-16 top-0 left-0 right-0 bottom-0 fixed min-w-screen min-h-screen z-30 flex flex-col items-center justify-center transition-all duration- ease-in-out " + (menuOpen ? "opacity-100 left-0 1200px:left-2/3 right-0 " : "left-full -right-full opacity-0 invisible overflow-hidden ") + ` ${themeClasses}`}>
      <ul key="menulist" className="w-full 375px:ml-4 768px:ml-8 uppercase ">
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white text-5xl 425px:text-6xl 768px:text-7xl font-normal font-display w-10 leading-none z-10 mb-2"
        >
          Case Studies
        </li>
        <MenuItem to="/scotty/" className="opacity-90">Scotty Cameron</MenuItem>
        <MenuItem to="/invoices/" className="opacity-90">Square Invoices</MenuItem>
        <MenuItem to="/fire/" className="opacity-90">California Fire</MenuItem>
        <MenuItem to="/brand/" className="opacity-90 mb-12">Square Brand</MenuItem>
        <MenuItem to="/contact/">Contact</MenuItem>
        <MenuItem to="/about/">About</MenuItem>
        <MenuItem to="/">Home</MenuItem>
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white-50 text-lg 425px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-4"
        >
          &copy; 1980
        </li>
      </ul>
    </div>
  </Fragment>
)};

export default Menu;
