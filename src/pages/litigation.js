import React from "react"
import LitigationList from "../components/sec/Litigation"
import Footer from "../components/sec/Footer"

const Litigation = () => {
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate()-99999);
var end = new Date(today);
end.setDate(end.getDate());

return (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
      rel="stylesheet"
    />

    <header className="bg-navy py-1">
      <div className="relative px-4 mx-auto max-w-2xl">
        <a className="absolute top-0 left-0 text-white-50" href="/sec">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </a>
        <h3 className="text-white-50 font-serif text-center text-sm uppercase">Secretary of the Secretary</h3>
      </div>
      

    </header>
    <div className="my-12 mx-auto max-w-2xl w-3/4 font-serif">
      <main>
        <section className="mb-12 relative">
          <h2 className="text-2xl border-b border-black-25 pb-2">Litigation</h2>
          <LitigationList startDate={start} endDate={end} />
          <div className="425px:absolute top-2 right-0">
            <a className="text-gold leading-loose hover:underline" href="https://www.sec.gov/rss/litigation/litreleases.xml">XML</a> | <a className="inline-block text-navy hover:underline" href="https://www.sec.gov/litigation/litreleases.htm">Source</a>
          </div>    
        </section>
      </main>
      <Footer />
    </div>
    </>
  )
}
export default Litigation