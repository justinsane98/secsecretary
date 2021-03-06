import React from "react"

const Feed = ({startDate, endDate, nodes, title, link, singleColumn}) => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let feed = [];
  let isSingleColumn = singleColumn ? singleColumn : false;

  nodes.sort(function(a,b){
    if(a.pubDate) {
      return new Date(b.pubDate) - new Date(a.pubDate);
    }
    if (a.date) {
      return new Date(b.pubDate) - new Date(a.pubDate);
    }
  });

  nodes.forEach(function(entry, i) {
  let content = entry.content ? entry.content.replaceAll("<br />", " ").replaceAll("&#39;", "'").replaceAll("`", "'") : "";
  content = entry.description ? entry.description : content;
  // remove wierd javascript injection from the feeds
  content = content.includes("(function($)") ? "" : content;
  let entryDay, entryMonth, entryYear, entryTime, entryMinute, entryHour, entryDate, entrySuffix;

  if(entry.pubDate){
    // Tue, 05 Oct 2021 15:05:00 -0400
    entryDay = entry.pubDate.split(" ")[1]
    entryMonth = entry.pubDate.split(" ")[2]
    entryYear = entry.pubDate.split(" ")[3]
    entryTime = entry.pubDate.split(" ")[4]
    entryMinute = entryTime.split(":")[1]
    entryHour = entryTime.split(":")[0]
    entryDate = new Date(entryYear, months.findIndex(element => element.includes(entryMonth)), entryDay);
  }

  if(entry.date){
    // Oct. 14, 2021 | 2:00 pm ET
    entryDay = entry.date.split(" ")[1].slice(0,-1)
    entryMonth = entry.date.split(" ")[0].slice(0,-1)
    entryYear = entry.date.split(" ")[2]
    entryTime = entry.date.split(" ")[4] ? entry.date.split(" ")[4] : "8:00"
    entrySuffix = entry.date.split(" ")[5]
    entryMinute = entryTime.split(":")[1]
    entryHour = entryTime.split(":")[0]
    entryHour =  entrySuffix === "pm" ? entryHour + 12 : entryHour;
    entryDate = new Date(entryYear, months.findIndex(element => element.includes(entryMonth)), entryDay);
  }


  if(entryDate.setHours(0,0,0,0) >= startDate.setHours(0,0,0,0) && entryDate.setHours(0,0,0,0) <= endDate.setHours(0,0,0,0)){ 
    feed.push (
      <li className={(isSingleColumn ? "" : " 1024px:mt-0") + " mb-8 "} key={(entry.title || entry.name ) + i }>
        <a className="mb-1 block leading-tight text-navy hover:underline" href={entry.link}>{entry.title ?? entry.name}</a>
        <p className="text-sm leading-relaxed text-black-75 mb-1">{content}</p>
        <p className="text-sm opacity-50">{entryMonth} {entryDay}, {entryYear} | {entryHour}:{entryMinute} EST</p>
      </li>
    );
  }
})

return (
  <>
      <section className={(feed.length > 0 ? "" : "hidden") + " mb-12 relative "}>
        <h2 className="text-2xl text-navy border-b border-black-10 pb-2">{title}</h2>
            
        <div className={(feed.length > 0 ? "" : "hidden")}>
          <ul className={"pt-4 " + (feed.length > 1 && !isSingleColumn ? " 1024px:grid 1024px:gap-8 1024px:grid-cols-2" : "")}>
            {feed}
          </ul>
        </div>

        <div className={(feed.length > 0 ? "" : "hidden") + " absolute top-2 right-0 text-navy opacity-25 hover:opacity-50"}>
          <a className="inline-block" href={link}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </a>
        </div>     
      </section>    

  </>
  )
}
export default Feed