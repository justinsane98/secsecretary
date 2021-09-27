import React from "react"
import Layout from "../components/Layout"
import data from '../data/data'
import Lyric from "../components/Lyric"
import Heading from "../components/Heading"
import { motion, AnimatePresence } from 'framer-motion'
import bg from "/public/images/contact5px.gif"
import Form from "../components/Form"

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
  initial: {opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: duration*3
    },
  },
  exit: {
    opacity: 0,
  },
};
const call = {
  initial: {opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      delay: duration*10,
      duration: duration*3
    },
  },
  exit: {
    opacity: 0,
  },
};

const Contact = () => (
  <>
    <Layout>
    <div className="px-4 425px:px-8 768px:px-12 text-center 768px:mx-auto 1024px:w-3/4 1200px:w-1/2 1400px:w-1/3">
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
          <div className="min-h-screen flex w-full flex-col justify-center pt-12 pb-4 768px:pt-24">
          <motion.div key={"heading"} variants={item} className="mb-2">
            <Heading content="Let's Talk" />
          </motion.div>
              <div className="w-full flex flex-col">
                <Form property={props}/>
              </div>
              <div className="mt-16">
                <motion.div key={"callme"} variants={call}>
                  <div
                    style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.1)" }}
                    className="lyric text-white-75 text-base 425px:text-base 768px:text-lg 1024px:text-xl font-normal font-serif leading-tight sm:leading-loose z-10 mb-4 text-center"
                  >
                  Or Call Me Maybe?
                  </div>
                  <a href="tel:+18036659539" className="font-display text-white text-xs 425px:text-base 768px:text-lg font-thin uppercase bg-pink py-2 px-4 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer">{props.phone}</a>
                </motion.div>
              </div>
          </div>
          

        </motion.div>
      </AnimatePresence>
      </div>
    </Layout>
</>
)
export default Contact