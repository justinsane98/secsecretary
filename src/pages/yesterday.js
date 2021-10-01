import React from "react"
import Litigation from "../components/sec/Litigation"
import News from "../components/sec/News"
import Speeches from "../components/sec/Speeches"
import Testimony from "../components/sec/Testimony"
import Statements from "../components/sec/Statements"
import Admin from "../components/sec/Admin"
import TradingSuspensions from "../components/sec/TradingSuspensions"
import Footer from "../components/sec/Footer"
import ProposedRules from "../components/sec/ProposedRules"

const Yesterday = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var MOD = 1;
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate() - MOD);
var startDate = months[start.getMonth()] + " " + (start.getDate()) + ", " + start.getFullYear();
var end = new Date(today);
end.setDate(end.getDate() - MOD);
var endDate = months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear();

return (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
      rel="stylesheet"
    />

    <header className="bg-navy text-center px-12 relative">
    <div className="absolute top-2 left-12 bg-white-10 h-0.5 right-12 w-100 z-0"></div>
      <div className="absolute top-3 left-10 bg-white-10 h-0.5 right-10 w-100 z-0"></div>
      <div className="absolute top-4 left-12 bg-white-10 h-0.5 right-12 w-100 z-0"></div>
      <span className="relative inline-block bg-navy py-1 px-2 text-sm uppercase text-white-50 font-serif z-1">Secretary of the Secretary</span>
    </header>
    <div className="my-12 mx-auto max-w-2xl w-3/4 font-serif">
    <main>
      <h1 className="text-3xl text-navy text-center">Yesterday at the SEC</h1>
      <h2 className="mb-8 text-lg text-center"> 
        {startDate === endDate ? startDate : (startDate + " - " + endDate)}
        <a className="text-navy-50 inline-block relative top-1 left-2" href="/sec">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </h2>
      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">News</h2>
        <News startDate={start} endDate={end} /> 
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/news">Past News</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Speeches</h2>
        <Speeches startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/speeches">Past Speeches</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Testimony</h2>
        <Testimony startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/testimony">Past Testimony</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Public Statements</h2>
        <Statements startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/statements">Past Statements</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Litigation</h2>
        <Litigation startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/litigation">Past Litigation</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Administrative Proceedings</h2>
        <Admin startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/admin">Past Proceedings</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Trading Suspensions</h2>
        <TradingSuspensions startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/tradingSuspensions">Past Suspensions</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Proposed Rules</h2>
        <ProposedRules startDate={start} endDate={end} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/proposedRules">Past Proposals</a>
        </div>     
      </section>
      
        {/* 

        <div className="opacity-50 mt-12">
        <h2>Other Commission Orders, Notices, and Information</h2>
        No Feed... request page and scrape data:
        grab the table#mainlist and iterate manually
        https://www.sec.gov/rules/other.htm
        
        <h2 className="text-lg border-b-2">FOIA Program</h2>
        <h2 className="text-lg border-b-2">ALJ Initial Decisions</h2>
        <h2 className="text-lg border-b-2">ALJ Initial Orders</h2>
        <h2 className="text-lg border-b-2">Divisions</h2>
        <h2 className="text-lg border-b-2">Regulatory Actions</h2>
        </div> */}

      </main>
      <Footer />
      </div>
    </>
  )
}
export default Yesterday
