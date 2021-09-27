import React from "react"
import Layout from "../components/Layout"
import TransitionLink from "gatsby-plugin-transition-link";
import { motion, AnimatePresence } from 'framer-motion'
import hand from "/public/images/hand-scotty.png"
import problem from "/public/images/missing.mp4"
import solution from "/public/images/scotty.mp4"
import logo from "/public/images/logo-scotty.png"
import watches from "/public/images/watches-scotty.png"

const duration = 0.5

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

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

const fromLeft = {
  initial: { height: "100%", opacity: 0, left:"10px" },
  enter: {
    opacity: 1,
    height: "100%",
    left: "0",
    transition: {
      delay: duration*3,
      duration: duration
    },
  },
  exit: {
    left: "10px",
    opacity: 0,
    height: "0"
  },
};

const Scotty = () => (
  <>
    <Layout>
    <AnimatePresence>
      <motion.section  variants={container} key="hero" className="text-white font-serif relative bg-gradient-to-br from-black-light to-black">
          <div className="px-4 425px:px-8 768px:px-12 1024px:mx-auto 1200px:max-w-7xl flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-32 768px:pt-0">
              <motion.h1 style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }} key="hero-heading" variants={item} className="font-display text-9xl mb-4 375px:text-10xl 1024px:text-12xl text-white leading-none bg-clip-text text-transparent bg-gradient-to-bl from-yellow-light to-yellow">Scotty
                <br/> <span className="text-white text-6xl 375px:text-7xl 1024px:text-8xl  1024px:-mt-2 block">Cameron</span>
              </motion.h1>
              <motion.div variants={item} key="hero-p">
                <p style={{textShadow: "rgba(0, 0, 0, 0.05) 2px 2px"}} 
                  className="text-white-50 text-base font-normal 768px:text-lg font-serif leading-8 z-10 mb-8 pr-4 max-w-md">
                  As a UX designer and full-stack developer, I metamorphisized a rigid legacy design into a flexible library of responsive modular components.  
                </p>
              </motion.div>
              <motion.div key="hero-cta" variants={item}>
                <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-yellow py-2 px-4 inline-block shadow-default border-yellow border-2 text-black focus:bg-yellow-dark active:bg-yellow-light hover:bg-yellow-light hover:cursor-pointer mb-4">Play Through</TransitionLink>
              </motion.div>
            </div>
            <motion.div variants={fromLeft} key="hero-image" className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 1024px:pt-12">
              <img className="object-cover 768px:object-contain object-bottom 768px:min-h-screen" alt="hero" src={hand}/>
            </motion.div>
          </div>
        </motion.section>

        <motion.div variants={container} key="problem" className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              className="object-cover object-center h-full w-full"
            >
              <source
                src={problem}
                type="video/mp4"
              />
          </video>
          </div>
          <motion.div  key={"problem-content"}  className="py-32 768px:min-h-screen flex flex-col justify-center relative z-10 text-center">
            <motion.div key={"heading-1"} variants={item}>
              <h2
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
                className={"heading text-5xl 425px:text-6xl 768px:text-7xl my-2 768px:mt-0 768px:mb-0 inline-block font-thin font-display text-white leading-tight drop-shadow leading-tight"}>
                Another One <br/> Bites The Dust <br/> <span className="opacity-50 text-3xl relative -top-4">- Queen</span></h2>
            </motion.div>
           
            
          </motion.div>
        </motion.div>


<section key="solution-details" className="text-gray-600 font-serif px-4 425px:px-8 768px:px-12 bg-white bg-gradient-to-br from-white to-black-50">
  <div className="container py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="1024px:w-1/3 1024px:py-6 mx-auto">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow inline-flex items-center justify-center text-black-50 relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-gray-900 mb-1 text-xl">Nonfungible</h2>
            <p className="leading-relaxed max-w-md">Beautiful, bespoke and handcrafted launches became hard to update tokens of frustration with no ability to repurpose.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow inline-flex items-center justify-center text-black-50 relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold  text-gray-900 mb-1 text-xl">Mulligan</h2>
            <p className="leading-relaxed max-w-md">The visual style was above par but Scotty wanted a do-over on the content management and modularity.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow inline-flex items-center justify-center text-black-50 relative z-10">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-xl text-gray-900 mb-1">Adaptive Approach</h2>
            <p className="leading-relaxed max-w-md">Primarily desktop focused previously, the mobile experience was in the rough and needed some relief.</p>
          </div>
        </div>
       
      </div>
      <div className="1024px:w-2/3 1024px:mt-0 mt-12 flex">
        <img src={watches} alt="step" className="object-center object-contain"/>
      </div>   
    </div>
  </div>
</section>
<motion.div variants={container} key="solution" className="relative font-serif">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                className="object-cover object-center h-full w-full"
              >
                <source
                  src={solution}
                  type="video/mp4"
                />
            </video>
          </div>
          <motion.div  key={"solution-content"}  className="py-32 768px:min-h-screen flex flex-col justify-center relative z-10 text-center">
            <motion.div key={"heading-1"} variants={item}>
              <h2
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
                className={"heading text-5xl 425px:text-6xl 768px:text-7xl my-2 768px:mt-0 768px:mb-0 inline-block font-thin font-display text-white leading-tight drop-shadow"}>
                Back In Black<br/> <span className="opacity-50 text-3xl relative -top-4">- AC/DC</span>
              </h2>
            </motion.div>
          </motion.div>
          </motion.div>




  <section key="how" className="bg-gradient-to-bl bg-black from-white-10 to-black font-serif text-white">
  <div className="container px-5 py-24 mx-auto 1024px:w-2/3 1200px:w-1/2 1600px:w-1/3 flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow text-black relative z-10 font-bold text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold mb-1 text-xl">Step By Step <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- New Kids On The Block</span></h2>
          <p className="leading-relaxed opacity-75">Worked with the client to identify existing content structures and designs elements that they wanted to recycle and used that information to produce a series of wireframes that would guide the development process.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto  group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow text-black relative z-10 font-bold text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold mb-1 text-xl">Gettin' Jiggy Wit It <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Will Smith</span></h2>
          <p className="leading-relaxed opacity-75">The goal from the very first tee was for customers to be able to leverage any device or browser, from the latest phone or tablet to an old work computer. Even Rodney Dangerfield should be able to use his high-tech golf bag.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center  mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow text-black relative z-10  font-bold text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold mb-1 text-xl">U Can't Touch This <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- MC Hammer </span></h2>
          <p className="leading-relaxed opacity-75">Provided each component with flexible layout and theming options to make repeatable content feel more organic and less sterile while still conforming to strict style guidelines.</p>
        </div>
      </div>
    </div>
  </div>
</section>



          <motion.div variants={container} key="branding" className="bg-black font-serif relative 768px:min-h-screen flex flex-col justify-center ">
          <motion.div  key={"branding-content"} className="py-32 text-center px-auto text-white">
              
              <div className="container px-5 py-24 mx-auto 1024px:w-1/2">
                <img src={logo} alt="Square" className="w-full max-w-md inline-block mb-12"/>
               </div>
          </motion.div>
          </motion.div>

  <section className="text-white font-serif px-4 425px:px-8 768px:px-12 bg-gradient-to-bl from-black-light to-black">
  <div className="container flex flex-wrap px-5 py-24 items-center mx-auto">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-white-10">
      <h1 className="sm:text-3xl text-2xl font-bold mb-2">What I learned</h1>
      <p className="leading-relaxed text-base text-white-50">From high-end putters to the simplest web components, form should never eclipse function. Always take the time to craft something you can be proud of for at least iterations if not generations.</p>
      <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="mt-4 font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-yellow py-2 px-4 inline-block shadow-default border-yellow-dark border-2 text-black focus:bg-yellow-dark active:bg-yellow-light hover:bg-yellow-light hover:text-black hover:cursor-pointer mb-4">Grow With Me</TransitionLink>
              
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="font-bold mb-3 text-xl">Technologies Used</h2>
      <nav className="flex flex-wrap list-none -mb-1  text-white-50">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://www.figma.com/" className="hover:underline">Figma</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://pugjs.org/api/getting-started.html">Umbraco CMS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://docs.microsoft.com/en-us/dotnet/" className="hover:underline">.NET</a>/<a href="https://docs.microsoft.com/en-us/dotnet/csharp/" className="hover:underline">C#</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://html.spec.whatwg.org/multipage/">HTML</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://www.w3.org/Style/CSS/Overview.en.html" className="hover:underline">CSS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://sass-lang.com/" className="hover:underline">SASS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="hover:underline">Javascript</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://jquery.com/" className="hover:underline">jQuery</a>
        </li>
      </nav>
    </div>
  </div>
</section>


   </AnimatePresence>     
    </Layout>
</>
)
export default Scotty