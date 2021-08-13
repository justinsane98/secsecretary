import React from "react"
import Layout from "../components/Layout"
import data from '../data/data';
import InlineLink from "../components/InlineLink";
import Subtitle from "../components/Subtitle";
import Heading from "../components/Heading";
import { motion, AnimatePresence } from 'framer-motion'
import bg from "/public/images/square.gif"

const props = data.properties[1];
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
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
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

const Fire = () => (
  <>
    <Layout>
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
        
        <motion.div variants={container} key="content">
          <div className="min-h-screen flex flex-col justify-center">
            <motion.div key={"heading"} variants={item}>
              <Heading content=":fire:" />
            </motion.div>
            <motion.div key={"p"} variants={item}>
            <p 
                  style={{textShadow: "rgba(0, 0, 0, 0.2) 2px 2px"}} 
                  className="text-white text-base font-normal 768px:text-lg font-serif leading-8 768px:leading-10 z-10 mb-4 pr-4 1200px:w-1/2">
                  Content TBD <InlineLink content="< Home" to="/"/>
                </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
</>
)
export default Fire