import React from "react"
import Layout from "../components/Layout"
import data from '../data/data';
import Lyric from "../components/Lyric";
import Title from "../components/Title";
import { motion, AnimatePresence } from 'framer-motion'
import TransitionLink from "gatsby-plugin-transition-link";
import bg from "/public/images/scene2.gif"

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
const transition = {
  length: duration
}
const Maps = () => (
  <>
    <Layout>
    <AnimatePresence>
      <motion.div variants={container}>
        <Title property={props} />
      </motion.div>

      <motion.div variants={variants}
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
         <motion.ul variants={container}>
            {
              props.lyrics.map(function(obj, i){
                return (
                    <motion.li key={i} variants={item}>
                      <Lyric content={obj}  />
                    </motion.li>
                )
              
              })
            }
            <motion.li key={"cta"} variants={item} className="">
              <input className="font-serif text-xl py-2 px-4 shadow-default border-pink border-2 focus:outline-none focus:border-pink-dark opacity-70" placeholder="Email Address"></input>
              <TransitionLink to={props.url} enter={transition} exit={transition} className="ml-2 font-display text-blue text-xl font-thin uppercase bg-pink py-2 px-4 shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer">{props.cta}</TransitionLink>
            </motion.li>

            <motion.li key={"cta"} variants={item} className="mt-4">
              <TransitionLink to={props.url} enter={transition} exit={transition} className="font-display text-blue text-xl font-thin uppercase border-pink py-2 px-4 border-2 border-inset text-pink focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer">{props.phone}</TransitionLink>
            </motion.li>
          </motion.ul>
          </AnimatePresence>
    </Layout>
</>
)
export default Maps