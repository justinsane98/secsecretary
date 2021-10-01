import React from "react";

function Header(props) {
  return (
    <header className="bg-navy text-center px-12 relative">
      <div className="absolute top-2 left-2 768px:left-1/4 bg-white-10 h-0.5 right-2 768px:right-1/4 w-100 z-0"></div>
      <div className="absolute top-3 left-2 768px:left-1/4 ml-1 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-1 w-100 z-0"></div>
      <div className="absolute top-4 left-2 768px:left-1/4 ml-2 bg-white-10 h-0.5 right-2 768px:right-1/4 mr-2 w-100 z-0"></div>
      <a href="/sec" className="relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1">Secretary of the Secretary</a>
    </header>
  );
}

export default Header;
