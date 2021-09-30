import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const News = ({rssUrl, sourceUrl, title}) => {

  const data = useStaticQuery(graphql`
  {
    allFeedNews {
      nodes {
        content
        guid
        pubDate
        title
        link
      }
    }
  
  }
`)

  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let today = new Date();
  let todaysDay = today.getDate();
  let todaysMonth = today.getMonth();
  let todaysYear = today.getFullYear();
  let searchDay = todaysDay;
  let searchMonth = months[todaysMonth].substring(0,3);
  let searchYear = todaysYear;

  let feed = [];
  let nodes = data.allFeedNews.nodes;

  nodes.forEach(function(entry, i) {
  let entryDay = entry.pubDate.split(" ")[1]
  let entryMonth = entry.pubDate.split(" ")[2]
  let entryYear = entry.pubDate.split(" ")[3]
  var entryTime = entry.pubDate.split(" ")[4]
  var entryMinute = entryTime.split(":")[1]
  var entryHour = entryTime.split(":")[0]
  var entryTimeString = entryHour + ":" + entryMinute + " EST"
  var content = entry.content ? entry.content.replaceAll("<br />", " ") : "";

  if((entryDay == searchDay) && entryMonth === searchMonth && entryYear == searchYear){
    feed.push (
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
      <section className={"mb-12 " + (feed.length > 0 ? "block" : "hidden" )}>
        <div className="768px:float-right">
          <a className="text-gold leading-loose" href={rssUrl}>XML</a> | <a className="inline-block text-navy" href={sourceUrl}> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> More</a>
        </div>
        <h2 className="text-2xl border-b border-black-25 pb-2">{title}</h2>
        <ul className="768px:flex 768px:flex-wrap 768px:-mx-8">
          {feed}
        </ul>
      </section>
    </>
  )
}
export default News