import React from "react"

const Feed = ({startDate, endDate, nodes, title, link, singleColumn}) => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let feed = [];
  let isSingleColumn = singleColumn ? singleColumn : false;
  nodes.forEach(function(entry, i) {
  let content = entry.content ? entry.content.replaceAll("<br />", " ") : "";
  content = entry.description ? entry.description : content;
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
    entryTime = entry.date.split(" ")[4]
    entrySuffix = entry.date.split(" ")[5]
    entryMinute = entryTime.split(":")[1]
    entryHour = entryTime.split(":")[0]
    entryHour =  entrySuffix === "pm" ? entryHour + 12 : entryHour;
    entryDate = new Date(entryYear, months.findIndex(element => element.includes(entryMonth)), entryDay);
  }


  if(entryDate.setHours(0,0,0,0) >= startDate.setHours(0,0,0,0) && entryDate.setHours(0,0,0,0) <= endDate.setHours(0,0,0,0)){ 
    feed.push (
      <li className="py-4" key={(entry.title || entry.name ) + i }>
        <a className="text-large text-navy font-bold hover:underline" href={entry.link}>{entry.title ?? entry.name}</a>
        <p className="opacity-90">{content}</p>
        <p className="text-sm opacity-50">{entryMonth} {entryDay} {entryHour}:{entryMinute} EST</p>
      </li>
    );
  }
})

return (
  <>
      <section className={(feed.length > 0 ? "" : "hidden") + " mb-12 relative "}>
        <h2 className="text-2xl border-b border-black-25 pb-2">{title}</h2>
            
        <div className={(feed.length > 0 ? "" : "hidden")}>
          <ul className={(feed.length > 1 && !isSingleColumn ? " 1024px:grid 1024px:gap-8 1024px:grid-cols-2" : "")}>
            {feed}
          </ul>
        </div>

        <div className={(feed.length > 0 ? "" : "hidden") + " 425px:absolute top-2 right-0 text-navy"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href={link}>More</a>
        </div>     
      </section>    

  </>
  )
}
export default Feed