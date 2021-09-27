import React from "react"
import Layout from "../components/Layout"
import TransitionLink from "gatsby-plugin-transition-link";
import { motion, AnimatePresence } from 'framer-motion'
import hand from "/public/images/hand-square-brand.png"
import problem from "/public/images/chaos.mp4"
import solution from "/public/images/stats-square-brand.jpg"
import logo from "/public/images/logo-square-brand.png"
import watches from "/public/images/watches.png"

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

const Brand = () => (
  <>
    <Layout>
    <AnimatePresence>
      <motion.section  variants={container} key="hero" className="text-white font-serif relative">
          <div className="px-4 425px:px-8 768px:px-12 1024px:mx-auto 1200px:max-w-7xl flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-32 768px:pt-0">
              <motion.h1 style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }} key="hero-heading" variants={item} className="font-display text-7xl 375px:text-8xl 1024px:text-10xl mb-4 text-white leading-none">Square
                <br/> <span className="text-white-50">Brand</span>
              </motion.h1>
              <motion.div variants={item} key="hero-p">
                <p style={{textShadow: "rgba(0, 0, 0, 0.05) 2px 2px"}} 
                  className="text-white text-base font-normal 768px:text-lg font-serif leading-8 z-10 mb-8 pr-4 max-w-md">
                  As a front-end engineer, I worked alongside World-Class designers to meticuluously craft a modern Swiss aesthetic into a robust design system that adapts to any browser or device. 
                </p>
              </motion.div>
              <motion.div key="hero-cta" variants={item}>
                <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-pink py-2 px-4 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer mb-4">Circle Back</TransitionLink>
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
                Runnin' Down<br/> A Dream <br/> <span className="opacity-50 text-3xl relative -top-4">- Tom Petty</span></h2>
            </motion.div>
           
            
          </motion.div>
        </motion.div>


<section key="solution-details" className="text-gray-600 font-serif mx-4 425px:mx-8 768px:mx-12">
  <div className="container py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="1024px:w-1/3 1024px:py-6 mx-auto">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white-25 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-gray-900 mb-1 text-xl">Monolithic</h2>
            <p className="leading-relaxed max-w-md opacity-90">One all encompassing Ruby on Rails app contained everything from the public website to the core payments infrastructure.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white-25 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold  text-gray-900 mb-1 text-xl">Growth</h2>
            <p className="leading-relaxed max-w-md opacity-90">Every week onboarding new team members, announcing new hardware and releasing new software.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white-25 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-xl text-gray-900 mb-1">Perfection</h2>
            <p className="leading-relaxed max-w-md opacity-90">From pixels to performance across all devices. If you can process a credit card on your phone, you should be able to have a great web experience.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white-25 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold mb-1 text-xl">i18n</h2>
            <p className="leading-relaxed max-w-md opacity-90">The international mulit-lingual team was distributed across 3 continents trying to deliver market specific content.</p>
          </div>
        </div>
      </div>
      <div className="1024px:w-2/3 1024px:mt-0 mt-12 flex">
        <img src={watches} alt="step" className="object-center object-contain"/>
      </div>   
    </div>
  </div>
</section>
<motion.div variants={container} key="solution" style={{backgroundImage: `url('${solution}')`}} className="relative bg-cover font-serif">
          <motion.div  key={"solution-content"}  className="py-32 768px:min-h-screen flex flex-col justify-center relative z-10 text-center">
            <motion.div key={"heading-1"} variants={item}>
              <h2
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }}
                className={"heading text-5xl 425px:text-6xl 768px:text-7xl my-2 768px:mt-0 768px:mb-0 inline-block font-thin font-display text-white leading-tight drop-shadow"}>
                Everything in <br/>it’s right place<br/> <span className="opacity-50 text-3xl relative -top-4">- Radiohead</span>
              </h2>
            </motion.div>
          </motion.div>
          </motion.div>




  <section key="how" className="text-gray-600 font-serif">
  <div className="container px-5 py-24 mx-auto 1024px:w-2/3 1200px:w-1/2 1600px:w-1/3 flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-pink-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-dark text-white relative z-10  font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center pl-2">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Immigrant Song <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Led Zeppelin</span></h2>
          <p className="leading-relaxed opacity-90">Extracted the marketing site from the core business-critical payments infrastructure and migrated into it a standalone project for development and deploy optimization and overall stability.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-pink-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-dark text-white relative z-10  font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Come As You Are <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Nirvana</span></h2>
          <p className="leading-relaxed opacity-90">Browsers and devices come in all shapes and sizes so I built a flexible responsive framework to easily adapt the design to each user's viewport.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto  group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-pink-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-dark text-white relative z-10 font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Blame Canada <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Mary Kay Bergman</span></h2>
          <p className="leading-relaxed opacity-90">No longer in my home and native land, launching in Canada required addressing different audiences with localized content, assets and value propositions.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center  mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-pink-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-dark text-white relative z-10  font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Turning Japanese <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- The Vapors</span></h2>
          <p className="leading-relaxed opacity-90">From custom Kanji fonts to hand photography that unknowlingly violated cultural norms, the Japanese launch threw a couple of curveballs mixed with a bit of humour and humility.</p>
        </div>
      </div>
    </div>
  </div>
</section>



          <motion.div variants={container} key="branding" className="font-serif relative bg-black 768px:min-h-screen flex flex-col justify-center ">
          <motion.div  key={"branding-content"} className="py-32 text-center px-auto text-white">
              
              <div className="container px-5 py-24 mx-auto 1024px:w-1/2">
                <img src={logo} alt="Square" className="w-full max-w-md inline-block mb-12"/>
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">2<span className="opacity-75 text-2xl">M</span></h2>
                    <p className="leading-relaxed">Merchants</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">210<span className="opacity-75 text-2xl">M</span></h2>
                    <p className="leading-relaxed">Buyers</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">5</h2>
                    <p className="leading-relaxed">Countries</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-white">3</h2>
                    <p className="leading-relaxed">Languages</p>
                  </div>
                </div>
              </div>
          </motion.div>
          </motion.div>




          <section className="text-gray-600 font-serif mx-4 425px:mx-8 768px:mx-12">
  <div className="container flex flex-wrap px-5 py-24 items-center mx-auto">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-black-25">
      <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">What I learned</h1>
      <p className="leading-relaxed text-base opacity-75">Keep things simple and always start small. Iterating and collaborating with others at all stages in the creative and development processes often yield the best experiences.</p>
      <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="mt-4 font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-pink py-2 px-4 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer mb-4">Grow With Me</TransitionLink>
              
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="font-bold text-gray-900 mb-3 text-xl text-gray-800">Technologies Used</h2>
      <nav className="flex flex-wrap list-none -mb-1 opacity-75">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://html.spec.whatwg.org/multipage/">HTML</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://jade-lang.com/">Jade</a>/<a className="hover:underline" href="https://pugjs.org/api/getting-started.html">Pug</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://yaml.org/" className="hover:underline">YAML</a>/<a href="https://haml.info/" className="hover:underline">HAML</a>
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
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://nodejs.org/" className="hover:underline">Node.js</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://d3js.org/" className="hover:underline">d3.js</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://gruntjs.com/" className="hover:underline">Grunt</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://rubyonrails.org/" className="hover:underline">Ruby on Rails</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://analytics.google.com" className="hover:underline">Google Analytics</a>
        </li>
      </nav>
    </div>
  </div>
</section>


   </AnimatePresence>     
    </Layout>
</>
)
export default Brand