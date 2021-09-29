import React, { useState, useEffect } from "react"
import Parser from 'rss-parser'

const Testimony = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var todaysDay = today.getDate();
var todaysMonth = today.getMonth();
var searchDay = todaysDay;
var searchMonth = months[todaysMonth].substring(0,3);

let parser = new Parser();
const rssUrl = "https://www.sec.gov/news/testimony.rss";
const sourceUrl = "https://www.sec.gov/news/testimony";

const [todaysTestimony, setTodaysTestimony] = useState(0)

useEffect(() => {
 
  parser.parseURL(rssUrl, function(err, feed) {
    var subset = [];
    feed.items.forEach(function(entry, i) {
      var entryDay = entry.pubDate.split(" ")[1]
      var entryMonth = entry.pubDate.split(" ")[2]
      var entryTime = entry.pubDate.split(" ")[4]
      var entryMinute = entryTime.split(":")[1]
      var entryHour = entryTime.split(":")[0]
      var suffix = "";
      if(entryHour >= 12) {
        suffix = "PM"
        entryHour = ((entryHour + 11) % 12 + 1)
      } else {
        suffix = "AM"
      }
      var entryTimeString = entryHour + ":" + entryMinute + suffix +" EST"

      if((entryDay == searchDay) && entryMonth === searchMonth){
        subset.push (
          <li className="768px:flex-col 768px:w-1/2 768px:px-8 py-4" key={entry.title + i}>
            <a className="text-large text-navy font-bold hover:underline" href={entry.link}>{entry.title}</a>
            <p className="opacity-90">{entry.content.replaceAll("<br />", " ")}</p>
            <p className="text-sm opacity-25">{entryTimeString}</p>
          </li>
        );
      }
    })
    setTodaysTestimony(subset)
  })
}, [])

return (
  <>
      <section className={"mb-12 " + (todaysTestimony.length > 0 ? "block" : "hidden" )}>
        <div className="768px:float-right">
          <a className="text-gold leading-loose" href={rssUrl}>XML</a> | <a className="inline-block text-navy" href={sourceUrl}> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> More</a>
        </div>
        <h2 className="text-2xl border-b border-black-25 pb-2">Testimony</h2>
        <ul className="768px:flex 768px:flex-wrap 768px:-mx-8">
          {todaysTestimony}
        </ul>
      </section>
    </>
  )
}
export default Testimony