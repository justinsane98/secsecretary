import React, { useState, useEffect } from "react"
import Parser from 'rss-parser'
import Litigation from "../components/sec/litigation"
import News from "../components/sec/news"
import Speeches from "../components/sec/speeches"
import Testimony from "../components/sec/testimony"
import Feed from "../components/sec/feed"

const Sec = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var todaysDate = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

return (
  <>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
              <link
                href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
                rel="stylesheet"
              />

      <header className="bg-navy text-white-50 font-serif text-center text-sm uppercase py-1 px-12">
          Office of the Secretary of the Secretary
      </header>
      <div className="my-12 mx-auto max-w-2xl w-3/4 font-serif">
      <main>
      <h1 className="text-3xl text-navy text-center">What’s New on the SEC Website</h1>
      <h2 className="mb-4 text-lg text-center">For {todaysDate}</h2>
      <blockquote className="mb-4 text-sm px-6 py-4 border border-navy-light">The official What’s New page for the SEC will no longer be updated after September 30, 2021. To stay current on the most recent materials posted to the SEC website, the SEC suggests subscribing to the <a className="text-navy font-bold hover:underline" href="https://www.sec.gov/about/secrss.shtml">SEC RSS feeds</a>. <span className="font-bold">Or you can let the Secretary take of that for you.</span></blockquote>
   
      <p className="mb-2">This page provides a daily list of the most recent materials posted to the SEC website. Note that the official release date of a document may differ from the posting date, in which case, the release date is indicated in parentheses. See also:</p>
      <ul className="mb-12 list-disc pl-8">
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/about/upcoming-events.htm">Upcoming Events</a> for a list of upcoming public events including meetings, public appearances, and hearings.</li>
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent">Latest Filings</a> for the most recent company filings.</li>
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/news/whatsnew/wn-archive.shtml">Previous What’s New Issues</a></li>
        <li><a className="text-navy font-bold hover:underline" href="https://www.sec.gov/news/digest.shtml">News Digest Archives (1956-2013)</a></li>
      </ul>
      
      {/*
      <Feed title="Press Releases" rssUrl="https://www.sec.gov/rss/news/press.xml" sourceUrl="https://www.sec.gov/news/pressreleases" />
      <Feed title="Litigation" rssUrl="https://www.sec.gov/rss/litigation/litreleases.xml" sourceUrl="https://www.sec.gov/litigation/litreleases.htm" />
      <Feed title="Speeches" rssUrl="https://www.sec.gov/rss/news/speech.xml" sourceUrl="https://www.sec.gov/news/speeches" />
      <Feed title="Testimony" rssUrl="https://www.sec.gov/news/testimony.rss" sourceUrl="https://www.sec.gov/news/testimony" />
      */}

      <Feed title="Testimony" rssUrl="https://www.sec.gov/news/testimony.rss" sourceUrl="https://www.sec.gov/news/testimony" />

      <div className="opacity-50 mt-12">
      <h2 className="text-lg border-b-2">FOIA Program</h2>
      <h2 className="text-lg border-b-2">ALJ Initial Decisions</h2>
      <h2 className="text-lg border-b-2">ALJ Initial Orders</h2>
      <h2 className="text-lg border-b-2">Divisions</h2>
      <h2 className="text-lg border-b-2">News and Public Statements</h2>
      <h2 className="text-lg border-b-2">Regulatory Actions</h2>
      </div>
      </main>
      </div>
    </>
  )
}
export default Sec