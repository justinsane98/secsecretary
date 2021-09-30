import React from "react"
import Litigation from "../components/sec/litigation"
import News from "../components/sec/news"
import Speeches from "../components/sec/speeches"
import Testimony from "../components/sec/testimony"
import Statements from "../components/sec/statements"
import Admin from "../components/sec/admin"
import TradingSuspensions from "../components/sec/tradingSuspensions"

const Sec = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var today = new Date();
var start = new Date(today);
start.setDate(start.getDate());
var startDate = months[start.getMonth()] + " " + (start.getDate()) + ", " + start.getFullYear();
var end = new Date(today);
end.setDate(end.getDate());
var endDate = months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear();

return (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
      rel="stylesheet"
    />

    <header className="bg-navy text-white-50 font-serif text-center text-sm uppercase py-1 px-12">
      Secretary of the Secretary
    </header>
    <div className="my-12 mx-auto max-w-2xl w-3/4 font-serif">
    <main>
      <h1 className="text-3xl text-navy text-center">What’s New on the SEC Website</h1>
      <h2 className="mb-4 text-lg text-center">For {startDate === endDate ? startDate : (startDate + " - " + endDate)}</h2>
      <blockquote className="mb-4 text-sm px-6 py-4 border border-navy-light">The official What’s New page for the SEC will no longer be updated after September 30, 2021. To stay current on the most recent materials posted to the SEC website, the SEC suggests subscribing to the <a className="text-navy font-bold hover:underline" href="https://www.sec.gov/about/secrss.shtml">SEC RSS feeds</a>. <span className="font-bold">Or you can let the Secretary take of that for you.</span></blockquote>

      <p className="mb-2">This page provides a daily list of the most recent materials posted to the SEC website. Note that the official release date of a document may differ from the posting date, in which case, the release date is indicated in parentheses. See also:</p>
      <ul className="mb-12 list-disc pl-8">
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/about/upcoming-events.htm">Upcoming Events</a> for a list of upcoming public events including meetings, public appearances, and hearings.</li>
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent">Latest Filings</a> for the most recent company filings.</li>
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/news/whatsnew/wn-archive.shtml">Previous What’s New Issues</a></li>
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/news/digest.shtml">News Digest Archives (1956-2013)</a></li>
      </ul>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">News</h2>
        <News startDate={start} endDate={end} /> 
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/news">More</a>
        </div>     
      </section>

      <section className="mb-12 relative">
        <h2 className="text-2xl border-b border-black-25 pb-2">Speeches</h2>
        <Speeches startDate={start} endDate={end} title="Speeches" />
        <div className="425px:absolute top-2 right-0 text-navy">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href="/speeches">More</a>
        </div>     
      </section>


      <Testimony startDate={start} endDate={end} title="Testimony" rssUrl="https://www.sec.gov/news/testimony.rss" sourceUrl="https://www.sec.gov/news/testimony" />
      <Statements startDate={start} endDate={end} title="Statements" rssUrl="https://www.sec.gov/news/statements.rss" sourceUrl="https://www.sec.gov/news/statements" />
      <Litigation startDate={start} endDate={end} title="Litigation" rssUrl="https://www.sec.gov/rss/news/press.xml" sourceUrl="https://www.sec.gov/news/pressreleases" />
      <Admin startDate={start} endDate={end} title="Administrative Proceedings" rssUrl="https://www.sec.gov/rss/litigation/admin.xml" sourceUrl="https://www.sec.gov/litigation/admin.htm" />
      <TradingSuspensions startDate={start} endDate={end} title="Trading Suspensions" rssUrl="https://www.sec.gov/rss/litigation/suspensions.xml" sourceUrl="https://www.sec.gov/litigation/suspensions.htm" />



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
      </div>
    </>
  )
}
export default Sec