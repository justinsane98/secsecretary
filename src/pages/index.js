import React from "react"
import Layout from "../components/Layout"
import data from '../data/data';
import Lyric from "../components/Lyric";
import Title from "../components/Title";
import { motion, AnimatePresence } from 'framer-motion'
import TransitionLink from "gatsby-plugin-transition-link";
import bg from "/public/images/home5px.gif"

const props = data.properties[0];

const duration = 0.5

const container = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 0,
      duration: duration
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 0,
      duration: duration
    },
  }
};
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
    opacity: 1,
    transition: { duration: duration },
  },
}

const Index = () => (
  <>
    <Layout>
    <div className="px-4 425px:px-8 768px:px-12 text-center">
      <AnimatePresence>
        <motion.div key="bg" variants={variants}
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
        <motion.div key="content" variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="py-24">
        <motion.div key="title" variants={variants}
                initial="initial"
                animate="enter"
                exit="exit">
            <Title property={props} />
        </motion.div>             
        <motion.ul key="ul" variants={container} 
            initial="initial"
            animate="enter"
            exit="exit"

            >
            {
              props.lyrics.map(function(obj, i){
                return (
                    <motion.li key={"lyrics-" + i} variants={item}>
                      <Lyric content={obj}  />
                    </motion.li>
                )
              
              })
            }
                        
            <motion.li key="cta" variants={item} className="pt-4">
              <TransitionLink to="/about" enter={{ length: duration }}  exit={{ length: duration }} className="font-display text-white shadow text-base 768px:text-lg 1024px:text-xl font-thin uppercase bg-pink py-2 px-4 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer">{props.cta}</TransitionLink>
            </motion.li>
          </motion.ul>
        </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
</>
)
export default Index
