import React, { useState } from "react"
import SEO from "./SEO"
import Menu from "./Menu"
import Hamburger from "./Hamburger"
import { motion, AnimatePresence } from 'framer-motion'
import logo from "/public/icon.svg"
import { TransitionLink } from "gatsby-plugin-transition-link/components/TransitionLink"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: 0,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
      delay: 0.5,
      when: 'beforeChildren',
    },

  },
}

const Layout = ({ children, location }) => {
  const [menuOpen, setMenuOpen, theme] = useState(false)
  
  return(
    <>
      <AnimatePresence>
        <motion.main
          key={"location-" + location}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="flex min-h-screen">
            <div className="w-full relative">

              <SEO />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
              <link
                href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
                rel="stylesheet"
              />
              <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(255, 0, 185,0.5), rgba(0,233,255,1))",
                  zIndex: -1
                }}
              />
               <motion.div variants={variants} className="h-0 absolute z-30 w-12 top-4 left-4 425px:left-8 375px:top-8 768px:left-16 768px:top-11">
               
               <TransitionLink to="/" enter={{ length: duration }} exit={{ length: duration }} className="opacity-75 hover:opacity-100 hover:cursor-pointer">
                 <img src={logo} alt="Justin Shearer" />
               </TransitionLink>
               </motion.div>
              <motion.div variants={variants} className="h-0">
                <button
                    
                    onClick={() => setMenuOpen(!menuOpen) }
                  >
                  <Hamburger menuopen={menuOpen ? 1 : 0} setMenuOpen={setMenuOpen} />
                </button>
              </motion.div>

              <Menu menuOpen={menuOpen ? 1 : 0} setMenuOpen={setMenuOpen}/>            
            
              <div className="min-h-screen flex-1 flex flex-col justify-center">
                {children}
              </div>
                
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
    </>
  )
    
}

export default Layout
