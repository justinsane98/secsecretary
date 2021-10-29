import React from "react"
import Feeds from "../components/Feeds"
import ManualFeeds from "../components/ManualFeeds"
import Layout from "../components/Layout"
import UpcomingEvents from "../components/UpcomingEvents"

const Index = () => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var MOD = 7;
  var today = new Date();

  var start = new Date(today);
  start.setDate(start.getDate() - MOD);
  var startDate = months[start.getMonth()] + " " + start.getDate() + ", " + start.getFullYear();
  var end = new Date(today);
  end.setDate(end.getDate());
  var endDate = months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear();

  var future = new Date(today);
  future.setDate(future.getDate() + MOD);

  var upcomingDateString = "";
  if(endDate === startDate){
      upcomingDateString = startDate
  } else {
    if(start.getMonth() === future.getMonth() ){
      upcomingDateString += months[today.getMonth()] + " " + today.getDate()
      upcomingDateString += " - " 
      upcomingDateString += future.getDate() + ", " + future.getFullYear()
    } else {
      upcomingDateString += months[start.getMonth()] + " " + today.getDate() + ", " + start.getFullYear() 
      upcomingDateString += " - " 
      upcomingDateString += months[future.getMonth()] + " " + future.getDate() + ", " + future.getFullYear()
    }
  }

  var pastDateString = "";
  if(startDate === endDate){
      pastDateString = startDate
  } else {
    if(start.getMonth() === end.getMonth() ){
      pastDateString += months[start.getMonth()] + " " + start.getDate()
      pastDateString += " - " 
      pastDateString += end.getDate() + ", " + end.getFullYear()
    } else {
      pastDateString += months[start.getMonth()] + " " + start.getDate() + ", " + start.getFullYear() 
      pastDateString += " - " 
      pastDateString += months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear()
    }
  }

  var archives = [];
  var archiveLinks = [
    ["News", "/news"],
    ["Speeches", "/speeches"],
    ["Public Statements", "/statements"],
    ["Testimony", "/testimony"],
    ["Litigation", "/litigation"],
    ["Administrative Proceedings", "/admin"],
    ["Trading Suspensions", "/tradingSuspensions"],
    ["Proposed Rules", "/proposedRules"],
    ["Corporate Finance", "/coporateFinance"],
    ["Investor Alerts", "/investorAlerts"],
    ["Investment Management", "/investmentManagement"],
    ["Federal Register", "/federalRegister"],
    ["Meetings","/events"],
    ["Appearances","/appearances"],
    ["Other Orders and Notices","/otherOrdersNotices"],
  ]

  archiveLinks.forEach(function(entry, i) {
    archives.push (
      <li key={("archives-" + entry[1] + i)} className="w-full mb-2">
        <a className="hover:underline" href={entry[1]}>
          {entry[0]}
          <svg xmlns="http://www.w3.org/2000/svg" class="inline ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </li>
    );
  });

  return (
  <>
    <Layout>
         
      <div className="1024px:flex 1024px:space-x-12">
      <div className="relative 1024px:w-2/3 pt-8">
        <h1 className="text-3xl text-navy -mb-2">What's New at the SEC</h1>
        <h2 className="mb-8 text-navy opacity-50"><span>{pastDateString}</span></h2>
          <Feeds start={start} end={today} />
          <ManualFeeds start={start} end={today} />
      </div>
      
      <div className="1024px:w-1/3 pt-8 1024px:pl-8 bg-gradient-to-r from-black-1 to-white">
        <h3 className="text-3xl text-navy -mb-2">Upcoming Events</h3>
        <div className="mb-4 text-lg 1024px:mb-8  text-navy opacity-50">
          {upcomingDateString}
        </div>

        <UpcomingEvents start={start} end={future} />

        <div className="hidden 1024px:block mt-12 pt-12">
          <h3 className="text-xl leading-tight text-black-50">Don't see what you are looking for?</h3>
          <h3 className="text-3xl mt-2 mb-6 leading-none opacity-75">Dive into the Archives</h3>
        
          <ul className="flex flex-wrap opacity-50">
            {archives}
          </ul>
        </div>
      </div>
      </div>
     
    </Layout>
    </>
  )
}
export default Index
