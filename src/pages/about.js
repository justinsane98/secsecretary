import React from "react"
import Layout from "../components/Layout"
import InlineLink from "../components/InlineLink";
import Highlight from "../components/Highlight";
import Heading from "../components/Heading";
import { motion, AnimatePresence } from 'framer-motion'
import bg from "/public/images/about5px.gif"
import TransitionLink from "gatsby-plugin-transition-link";

const duration = 0.5

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const variants = {
  initial: {
    opacity: 0.9,
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
    transition: { duration: duration },
  },
}
const item = {
  initial: { height: "100%", opacity: 0 },
  enter: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: duration*3
    },
  },
  exit: {
    opacity: 0,
    height: "0"
  },
};

const About = () => (
  <>
    <Layout>
    <div className="px-4 425px:px-8 768px:px-12 text-center mx-auto 1024px:w-3/4 1200px:w-3/5 1400px:w-1/3 1600px:w-1/2">
    <AnimatePresence>
      <motion.div variants={variants}
            key="bg"
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute bg-cover top-0 left-0 right-0 bottom-0"
            style={{
              backgroundImage: "url("+ bg +")",
              backgroundPosition: "top center",
              zIndex: -2
            }}
          />
        
        <motion.div key="content" variants={container}>
          <div className="min-h-screen flex flex-col justify-center">
            <motion.div key={"heading"} variants={item}>
              <Heading content="Let's Dance" />
            </motion.div>
            <motion.div key={"p"} variants={item}>
                <p 
                  style={{textShadow: "rgba(0, 0, 0, 0.2) 2px 2px"}} 
                  className="text-white text-base font-normal 768px:text-lg font-serif leading-8 768px:leading-10 z-10 mb-2">
                  I am a creative <Highlight content="UI/UX"/> designer, seasoned <Highlight content="full-stack"/> web-developer and a data driven <Highlight content="generalist"/> who is always looking for an interesting problem to solve. Back in the early days of <TransitionLink to="/brand" enter={{ length: duration }} exit={{ length: duration }} className="bg-pink-50 hover:bg-pink color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block hover:animate-none">Square</TransitionLink>, I got to help grow an amazing <Highlight content="brand"/> and re-imagine the concept of <TransitionLink to="/invoices" enter={{ length: duration }} exit={{ length: duration }} className="bg-pink-50 hover:bg-pink color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block hover:animate-none">Invoices</TransitionLink>. More recently I worked with the legendary golfclub craftsman <TransitionLink to="/scotty" enter={{ length: duration }} exit={{ length: duration }} className="bg-pink-50 hover:bg-pink color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block hover:animate-none">Scotty Cameron</TransitionLink> to improve his performance while putting out some fires for the State of <TransitionLink to="/fire" enter={{ length: duration }} exit={{ length: duration }} className="bg-pink-50 hover:bg-pink color-white px-1 mx-0 text-lg 768px:text-xl font-display inline-block hover:animate-none">California</TransitionLink>. If you have a problem that is keeping you up at night but you can still manage to <Highlight content="laugh"/> about it...
                </p>
            </motion.div>
            <motion.div key="cta" variants={item} className="pt-4">
              <TransitionLink to="/contact" enter={{ length: duration }} exit={{ length: duration }} className="font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-pink py-2 px-4 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer mb-4">Let me know</TransitionLink>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </Layout>
</>
)
export default About