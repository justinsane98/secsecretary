import React from "react";

function Header(props) {
  return (
    <header className="bg-navy 425px:py-2 fixed top-0 left-0 right-0 w-full z-10">
      <div className="group relative mx-4 768px:mx-12 1200px:mx-auto 1200px:w-3/4 1400px:w-1/2 hover:cursor-pointer">
        <div className="absolute top-2 left-0 bg-white-10 h-0.5 right-1/3 768px:right-1/2 1024px:right-3/4 1200:right-5/6 w-100 z-0 group-hover:bg-white-25"></div>
        <div className="absolute top-3 left-1 bg-white-10 opacity-75 h-0.5 right-1/3 768px:right-1/2 1024px:right-3/4 1200:right-5/6 mr-1 w-100 z-0 group-hover:bg-white-25"></div>
        <div className="absolute top-4 left-2 bg-white-10 opacity-50 h-0.5 right-1/3 768px:right-1/2 1024px:right-3/4 1200:right-5/6 mr-2 w-100 z-0 group-hover:bg-white-25"></div>
        <a href="/" className="relative inline-block bg-navy py-1 px-2 left-6 text-sm uppercase text-white-50 font-serif z-1 group-hover:text-white-75 group-active:text-white group-focus:text-white">The Sec Secretary</a>
      </div>
    </header>
  );
}

export default Header;
