import React from "react"
import Litigation from "./Litigation"
import News from "./News"
import Speeches from "./Speeches"
import Testimony from "./Testimony"
import Statements from "./Statements"
import Admin from "./Admin"
import TradingSuspensions from "./TradingSuspensions"
import ProposedRules from "./ProposedRules"
import CorporateFinance from "./CorporateFinance"
import InvestmentManagement from "./InvestmentManagement"
import InvestorAlerts from "./InvestorAlerts"

const Feeds = ({start, end, message}) => {
return (
  <>
  <div>
    <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">News</h2>
        <News startDate={start} endDate={end} message={message}/> 
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/news">Past News</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Speeches</h2>
        <Speeches startDate={start} endDate={end} message={message} />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/speeches">Past Speeches</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Testimony</h2>
        <Testimony startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/testimony">Past Testimony</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Public Statements</h2>
        <Statements startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/statements">Past Statements</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Litigation</h2>
        <Litigation startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/litigation">Past Litigation</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Administrative Proceedings</h2>
        <Admin startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/admin">Past Proceedings</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Trading Suspensions</h2>
        <TradingSuspensions startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/tradingSuspensions">Past Suspensions</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Proposed Rules</h2>
        <ProposedRules startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/proposedRules">Past Proposals</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Corporate Finance</h2>
        <CorporateFinance startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/corporateFinance">Past News</a>
        </div>     
      </section>
      
      
      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Investor Alerts</h2>
        <InvestorAlerts startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/investorAlerts">Past Alerts</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Investment Management</h2>
        <InvestmentManagement startDate={start} endDate={end} message={message}/>
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/investmentManagement">Past News</a>
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
        </div>
    </>
  )
}
export default Feeds
