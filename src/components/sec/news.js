import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const News = ({startDate, endDate}) => {

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
  let feed = [];
  let nodes = data.allFeedNews.nodes;

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
    <ul className={(feed.length > 0 ? "" : "hidden") +" 768px:flex 768px:flex-wrap 768px:-mx-8"}>
      {feed}
    </ul>
    <p className={(feed.length > 0 ? "hidden" : "") + " py-4 opacity-50"}>
      No news has been published today.
    </p>
  </>
  )
}
export default News