import React from "react"
import Layout from "../components/Layout"
import TransitionLink from "gatsby-plugin-transition-link";
import { motion, AnimatePresence } from 'framer-motion'
import hand from "/public/images/hand-fire.png"
import problem from "/public/images/fire.mp4"
import solution from "/public/images/rain.mp4"
import logo from "/public/images/logo-fire.png"
import watches from "/public/images/watches-fire.png"

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

const Fire = () => (
  <>
    <Layout>
    <AnimatePresence>
      <motion.section  variants={container} key="hero" className="text-white font-serif relative bg-gradient-to-br from-gold-light to-gold">
          <div className="px-4 425px:px-8 768px:px-12 1024px:mx-auto 1200px:max-w-7xl flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-32 768px:pt-0">
              <motion.h1 style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.05)" }} key="hero-heading" variants={item} className="font-display text-5xl 375px:text-6 xl 1024px:text-7xl mb-4 text-navy leading-none">California
                <br/> <span className="bg-clip-text text-transparent bg-gradient-to-bl from-gold via-red to-gold text-9xl 375px:text-10xl 1024px:text-12xl">Fire</span>
              </motion.h1>
              <motion.div variants={item} key="hero-p">
                <p style={{textShadow: "rgba(0, 0, 0, 0.05) 2px 2px"}} 
                  className="text-brown text-base font-normal 768px:text-lg font-serif leading-8 z-10 mb-8 pr-4 max-w-md">
                  As a UX designer and full-stack developer, I worked alongside the State of California's Department of Forestry and Fire Protection to replace a legacy paper process with a modern web-based solution that manages emergency data in real-time.
                </p>
              </motion.div>
              <motion.div key="hero-cta" variants={item}>
                <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-red py-2 px-4 inline-block shadow-default border-red border-2 text-white focus:bg-red-dark active:bg-red-light hover:bg-red-light hover:text-white hover:cursor-pointer mb-4">Get Started</TransitionLink>
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
                We Didn't Start<br/> The Fire <br/> <span className="opacity-50 text-3xl relative -top-4">- Billy Joel</span></h2>
            </motion.div>
           
            
          </motion.div>
        </motion.div>


<section key="solution-details" className="text-gray-600 font-serif px-4 425px:px-8 768px:px-12 bg-gradient-to-br from-white to-navy-lighter ">
  <div className="container py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="1024px:w-1/3 1024px:py-6 mx-auto">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-gray-900 mb-1 text-xl">Eureka</h2>
            <p className="leading-relaxed max-w-md">With accelerating climate change, historic droughts and inversely decreasing budgets California has been battling fires upwind for decades.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold  text-gray-900 mb-1 text-xl">Paper Process</h2>
            <p className="leading-relaxed max-w-md">Critical portions of the fire incident management process were simply bogged down by unreadable handwriting of tired personnel in the field.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold text-xl text-gray-900 mb-1">Responsiveness</h2>
            <p className="leading-relaxed max-w-md">In emergency situtations, responders and residents need accurate real-time data on any device or browser while connectivity may be limited.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold mb-1 text-xl">Accessibility</h2>
            <p className="leading-relaxed max-w-md">Every State of California’s website is mandated to comply with California Government Code Sections 7405 and 11135 and the Web Content Accessibility Guidelines 2.0.</p>
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
                November Rain<br/> <span className="opacity-50 text-3xl relative -top-4">- Guns N' Roses</span>
              </h2>
            </motion.div>
          </motion.div>
          </motion.div>




  <section key="how" className="bg-gradient-to-bl from-navy-lighter to-navy-light font-serif">
  <div className="container px-5 py-24 mx-auto 1024px:w-2/3 1200px:w-1/2 1600px:w-1/3 flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-red-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-dark text-white relative z-10  font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center pl-2">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Maps <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Yeah Yeah Yeahs</span></h2>
          <p className="leading-relaxed">Navigated the technical and financial issues around the scaling and spiking of request volume. Migrated the public facing Google Maps API implimentation to ESRI ArcGIS Javascript API and advised to add a caching layer.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-red-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-dark text-white relative z-10  font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Baby Got Back <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Sir Mix-A-Lot</span></h2>
          <p className="leading-relaxed">Critical fire incident updates can now be submitted from the field and be approved by managers and local authorities within a custom dashboard within the backoffice of an Umbraco Content Management System.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center mx-auto  group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-red-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-dark text-white relative z-10 font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">Oye Cómo Va <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- Santana</span></h2>
          <p className="leading-relaxed">Not just accessible on any browser or device, now the content is available in more than a dozen languages via the Google Translate API.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center  mx-auto group">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-red-25 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-dark text-white relative z-10  font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24  bg-white-25 text-white rounded-full inline-flex items-center justify-center">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-bold text-gray-900 mb-1 text-xl">California Love <span className="text-white-25 hidden 768px:inline font-normal opacity-0 group-hover:opacity-100">- 2Pac</span></h2>
          <p className="leading-relaxed">Forged a custom library of reusable Umbraco components by leveraging a standardized accessible look and feel provided by the State. </p>
        </div>
      </div>
    </div>
  </div>
</section>



          <motion.div variants={container} key="branding" className="bg-navy font-serif relative 768px:min-h-screen flex flex-col justify-center ">
          <motion.div  key={"branding-content"} className="py-32 text-center px-auto text-white">
              
              <div className="container px-5 py-24 mx-auto 1024px:w-1/2">
                <img src={logo} alt="Square" className="w-full max-w-md inline-block mb-12"/>
                <h2 className="768px:text-4xl text-3xl font-bold mb-6 text-white">2020 Fire Season</h2>
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="font-medium sm:text-4xl text-3xl text-navy-lighter">4.2<span className="opacity-75 text-2xl">M</span></h2>
                    <p className="leading-relaxed text-navy-light">Acres Burned</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-navy-lighter">10<span className="opacity-75 text-2xl">K</span></h2>
                    <p className="leading-relaxed text-navy-light">Incidents</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-navy-lighter">33</h2>
                    <p className="leading-relaxed text-navy-light">Fatalities</p>
                  </div>
                  <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className=" font-medium sm:text-4xl text-3xl text-navy-lighter">10<span className="opacity-75 text-2xl">K</span></h2>
                    <p className="leading-relaxed text-navy-light">Structures Burned</p>
                  </div>
                </div>
               </div>
          </motion.div>
          </motion.div>

  <section className="text-white font-serif px-4 425px:px-8 768px:px-12 bg-gradient-to-bl from-navy-dark to-navy-darker">
  <div className="container flex flex-wrap px-5 py-24 items-center mx-auto">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-white-10">
      <h1 className="sm:text-3xl text-2xl font-bold mb-2">What I learned</h1>
      <p className="leading-relaxed text-base text-navy-lighter">Even the largest organizations can be agile when the fire is burning hot enough. Constant clear communication improves response time and saves lives in emergency situtions. </p>
      <TransitionLink to="/contact" enter={{ length: duration }}  exit={{ length: duration }} className="mt-4 font-display text-white shadow text-base 768px:text-lg 1024px text-xl font-thin uppercase bg-red py-2 px-4 inline-block shadow-default border-red border-2 text-white focus:bg-red-dark active:bg-red-light hover:bg-red-light hover:text-white hover:cursor-pointer mb-4">Grow With Me</TransitionLink>
              
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
      <h2 className="font-bold mb-3 text-xl">Technologies Used</h2>
      <nav className="flex flex-wrap list-none -mb-1  text-navy-lighter">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://www.figma.com/" className="hover:underline">Figma</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="hover:underline" href="https://pugjs.org/api/getting-started.html">Umbraco CMS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://developers.google.com/maps" className="hover:underline">Google Maps API</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://developers.arcgis.com/javascript/latest/" className="hover:underline">ESRI/ArcGIS API</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://developers.google.com/translate" className="hover:underline">Google Translate API</a>
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
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a href="https://vuejs.org/" className="hover:underline">Vue.js</a>
        </li>
      </nav>
    </div>
  </div>
</section>


   </AnimatePresence>     
    </Layout>
</>
)
export default Fire