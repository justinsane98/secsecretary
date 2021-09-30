import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Litigation = ({rssUrl, sourceUrl, title, startDate, endDate}) => {

  const data = useStaticQuery(graphql`
  {
    allFeedLitigation {
      nodes {
        content
        title
        pubDate
        link
      }
    }
  }
`)

  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let feed = [];
  let nodes = data.allFeedLitigation.nodes;

  nodes.forEach(function(entry, i) {
    let entryDay = entry.pubDate.split(" ")[1]
    let entryMonth = entry.pubDate.split(" ")[2]
    let entryYear = entry.pubDate.split(" ")[3]
    var entryTime = entry.pubDate.split(" ")[4]
    var entryMinute = entryTime.split(":")[1]
    var entryHour = entryTime.split(":")[0]
    var content = entry.content ? entry.content.replaceAll("<br />", " ") : "";
    var entryDate = new Date(entryYear, months.findIndex(element => element.includes(entryMonth)), entryDay);
  
    if(entryDate.setHours(0,0,0,0) >= startDate.setHours(0,0,0,0) && entryDate.setHours(0,0,0,0) <= endDate.setHours(0,0,0,0)){ 
      feed.push (
        <li className="768px:flex-col 768px:w-1/2 768px:px-8 py-4" key={entry.title + i}>
          <a className="text-large text-navy font-bold hover:underline" href={entry.link}>{entry.title}</a>
          <p className="opacity-90">{content}</p>
          <p className="text-sm opacity-25">{entryMonth} {entryDay} {entryHour}:{entryMinute} EST</p>
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
export default Litigation