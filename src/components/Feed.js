import React from "react"

const Feed = ({startDate, endDate, nodes, title, link}) => {

  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let feed = [];
 
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
      <li className="py-4" key={entry.title + i}>
        <a className="text-large text-navy font-bold hover:underline" href={entry.link}>{entry.title}</a>
        <p className="opacity-90">{content}</p>
        <p className="text-sm opacity-25">{entryMonth} {entryDay} {entryHour}:{entryMinute} EST</p>
      </li>
    );
  }
})

return (
  <>
      <section className={(feed.length > 0 ? "" : "hidden") + " mb-12 relative "}>
        <h2 className="text-2xl border-b border-black-25 pb-2">{title}</h2>
            
        <div className={(feed.length > 0 ? "" : "hidden")}>
          <ul>
            {feed}
          </ul>
        </div>

        <div className={(feed.length > 0 ? "" : "hidden") + " 425px:absolute top-2 right-0 text-navy"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block relative -top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> <a className="inline-block hover:underline" href={link}>Archives</a>
        </div>     
      </section>    

  </>
  )
}
export default Feed