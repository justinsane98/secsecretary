import React, { useState, useEffect } from "react"
import Parser from 'rss-parser'

const Sec = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var todaysDate = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
var todaysDay = today.getDate();
var todaysMonth = today.getMonth();
var searchDay = todaysDay;
var searchMonth = months[todaysMonth].substring(0,3);

let parser = new Parser();
const [todaysLitigation, setTodaysLitigation] = useState(0)

useEffect(() => {
  parser.parseURL('https://www.sec.gov/rss/litigation/litreleases.xml', function(err, feed) {
  var subset = [];
  feed.items.forEach(function(entry) {
    var entryDay = entry.pubDate.split(" ")[1]
    var entryMonth = entry.pubDate.split(" ")[2]
    if((entryDay == searchDay) && entryMonth === searchMonth){
      subset.push (
        <li className="block mb-2" key={entry.title}>
          <a className="text-blue" href={entry.link}>{entry.title}</a>
        </li>
      );
    }
  });
  setTodaysLitigation(subset)
})
}, [])




return (
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
      <div className="opacity-50 mb-12">
        <h2 className="text-lg border-b-2">FOIA Program</h2>

        <h2 className="text-lg border-b-2">ALJ Initial Decisions</h2>
        <h2 className="text-lg border-b-2">ALJ Initial Orders</h2>
        <h2 className="text-lg border-b-2">Divisions</h2>
      </div>
      <h2 className="text-lg border-b-2">Litigation</h2>
        <a href="https://www.sec.gov/rss/litigation/litreleases.xml">Source</a> | <a href="https://www.sec.gov/litigation/litreleases.htm">Full Search</a>
        <ul>
          {todaysLitigation}
        </ul>
      <div>

      </div>


      <div className="opacity-50 mt-12">
          <h2 className="text-lg border-b-2">News and Public Statements</h2>
          <h2 className="text-lg border-b-2">News</h2>
          <h2 className="text-lg border-b-2">Regulatory Actions</h2>
      </div>


      </div>
    </>
  )
}
export default Sec