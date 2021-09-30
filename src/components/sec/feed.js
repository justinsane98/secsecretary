import React, { useState, useEffect } from "react"
import Parser from 'rss-parser'
import fetch from 'node-fetch'
import { useStaticQuery, graphql } from "gatsby"

const Feed = ({rssUrl, sourceUrl, title}) => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var todaysDay = today.getDate();
var todaysMonth = today.getMonth();
var todaysYear = today.getFullYear();
var searchDay = todaysDay;
var searchMonth = months[todaysMonth].substring(0,3);
var searchYear = todaysYear;

const newsData = useStaticQuery(graphql`
{
  allFeedNews {
    nodes {
      content
      title
      pubDate
      link
    }
  }
}
  `)

     var newsFeed = [];
     var news = newsData.allFeedNews.nodes;
     
     news.forEach(function(entry, i) {
      
      var entryDay = entry.pubDate.split(" ")[1]
      var entryMonth = entry.pubDate.split(" ")[2]
      var entryYear = entry.pubDate.split(" ")[3]
      var entryTime = entry.pubDate.split(" ")[4]
      var entryMinute = entryTime.split(":")[1]
      var entryHour = entryTime.split(":")[0]
      
      var entryTimeString = entryHour + ":" + entryMinute + " EST"
      var content = entry.content ? entry.content.replaceAll("<br />", " ") : "";

      if((entryDay == searchDay) && entryMonth === searchMonth && entryYear == searchYear){

        newsFeed.push (
            <li className="768px:flex-col 768px:w-1/2 768px:px-8 py-4" key={entry.title + i}>
              <a className="text-large text-navy font-bold hover:underline" href={entry.link}>{entry.title}</a>
              <p className="opacity-90">{content}</p>
              <p className="text-sm opacity-25">{entryTimeString}</p>
            </li>
          );
      }
    })

return (
  <>
      <section className={"mb-12 " + (news.length > 0 ? "block" : "hidden" )}>
        <div className="768px:float-right">
          <a className="text-gold leading-loose" href={rssUrl}>XML</a> | <a className="inline-block text-navy" href={sourceUrl}> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> More</a>
        </div>
        <h2 className="text-2xl border-b border-black-25 pb-2">{title}</h2>
        <ul className="768px:flex 768px:flex-wrap 768px:-mx-8">
          {newsFeed}
        </ul>
      </section>
    </>
  )
}
export default Feed