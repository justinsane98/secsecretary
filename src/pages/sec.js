import React from "react"
import fetch from 'node-fetch'

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var todaysDate = months[today.getMonth()] + " " + today.getDay() + ", " + today.getFullYear();

const RSSURL = `https://www.sec.gov/rss/litigation/litreleases.xml`;
fetch(RSSURL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))

const Sec = () => (
  <>
    <div className="mx-auto w-3/4 font-serif">
    <h1 className="mb-4 text-xl">What’s New on the SEC Website</h1>
    <h2 className="mb-2 text-lg">{todaysDate}</h2>
    <p className="mb-2">This page provides a daily list of the most recent materials posted to the SEC website. Note that the official release date of a document may differ from the posting date, in which case, the release date is indicated in parentheses. See also:</p>
    <ul className="mb-2">
      <li><a className="text-blue" href="https://www.sec.gov/about/upcoming-events.htm">Upcoming Events</a> for a list of upcoming public events including meetings, public appearances, and hearings.</li>
      <li><a className="text-blue" href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent">Latest Filings</a> for the most recent company filings.</li>
      <li><a className="text-blue" href="https://www.sec.gov/news/whatsnew/wn-archive.shtml">Previous What’s New Issues</a></li>
      <li><a className="text-blue" href="https://www.sec.gov/news/digest.shtml">News Digest Archives (1956-2013)</a></li>
    </ul>
    
    <h2 className="text-lg border-b-2">FOIA Program</h2>

    <h2 className="text-lg border-b-2">ALJ Initial Decisions</h2>
    <h2 className="text-lg border-b-2">ALJ Initial Orders</h2>
    <h2 className="text-lg border-b-2">Divisions</h2>
    <h2 className="text-lg border-b-2">Litigation</h2>
    <a href="https://www.sec.gov/rss/litigation/litreleases.xml">Source</a>



    <h2 className="text-lg border-b-2">News and Public Statements</h2>
    <h2 className="text-lg border-b-2">News</h2>
    <h2 className="text-lg border-b-2">Regulatory Actions</h2>



    </div>
  </>
)
export default Sec