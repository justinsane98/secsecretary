import React, { Fragment } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.5

const item = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
     transition: {
      duration: duration
    },
  },
  exit: {
    opacity: 0,
  },
};
const Menu = ({menuOpen}) => (
  <Fragment>
    <div className={"px-4 375px:px-8 768px:px-16 top-0 left-0 right-0 bottom-0 fixed min-w-screen min-h-screen bg-pink z-30 flex flex-col items-center justify-center transition-all duration- ease-in-out " + (menuOpen ? "opacity-100 left-0 1200px:left-2/3 right-0" : "left-full -right-full opacity-0 invisible overflow-hidden")}>
    {/* CLOSE BUTTON */}
    <AnimatePresence>
      <ul key="menulist" className="w-full 375px:ml-4 768px:ml-8 uppercase ">
          <motion.li variants={item}
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white text-base 768px:text-lg font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-blue hover:pl-1"
        >
          <TransitionLink to="/" enter={{ length: duration }} exit={{ length: duration }} className="">Home</TransitionLink>
                
        </motion.li>
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white text-base 768px:text-lg font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-blue hover:pl-1"
        >
          <TransitionLink to="/about" enter={{ length: duration }} exit={{ length: duration }} className="">About</TransitionLink>
                
        </li>
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white text-base 768px:text-lg font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-blue hover:pl-1"
        >
          <TransitionLink to="/contact" enter={{ length: duration }} exit={{ length: duration }} className="">Contact</TransitionLink>
                
        </li>
        {/* <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white text-5xl 425px:text-6xl 768px:text-7xl font-normal font-display w-10 leading-tight z-10 mb-2"
        >
          Case Studies
                
        </li>
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-blue text-lg 768px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-white hover:pl-1"
        >
          <TransitionLink to="/scotty" enter={transition} exit={transition} className="">Scotty Cameron</TransitionLink>
                
        </li>
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-blue text-lg 768px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-white hover:pl-1"
        >
          <TransitionLink to="/fire" enter={transition} exit={transition} className="">California Fire</TransitionLink>
                
        </li>
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-blue text-lg 425px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-8 hover:text-white hover:pl-1"
        >
          <TransitionLink to="/square" enter={transition} exit={transition} className="">Square</TransitionLink>
                
        </li> */}
        <li
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className="menu-item text-white text-lg 425px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 opacity-50"
        >
          &copy; 1980
                
        </li>
      </ul>
      </AnimatePresence>
    </div>
  </Fragment>
);

export default Menu;
