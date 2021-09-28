import React, { Fragment } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { AnimatePresence } from 'framer-motion'

const duration = 0.5

const MenuItem = ({to, className, children}) => {

  var  path = "";
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  } 

return (
  <Fragment>
    <AnimatePresence>
        <li 
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
          className={"menu-item text-white-90 text-lg 425px:text-xl font-serif leading-tight sm:leading-loose z-10 mb-4 hover:text-white hover:pl-1 " + (path === to ? "font-bold" : "font-normal") + " " + className }
        >
          <TransitionLink to={to} enter={{ length: duration }} exit={{ length: duration }} className="">
            {children}
          </TransitionLink>
        </li>
      </AnimatePresence>
  </Fragment>
)};

export default MenuItem;
