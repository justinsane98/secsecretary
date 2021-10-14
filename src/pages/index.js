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
      upcomingDateString += months[start.getMonth()] + " " + start.getDate() + ", " + start.getFullYear() 
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

  return (
  <>
    <Layout>
         
      <div className="1024px:flex 1024px:space-x-12">
      <div className="relative 1024px:w-2/3 pt-8">
        <h1 className="text-3xl text-navy -mb-2">What's New at the SEC</h1>
        <h2 className="mb-8 text-lg text-navy opacity-50">
          {/* <a className="text-navy-50 inline-block relative top-1 left-0" href="/yesterday">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a> */}
          <span>{pastDateString}</span>
        </h2>
        
          <Feeds start={start} end={today} />
          <ManualFeeds start={start} end={today} />
      </div>
      
      <div className="1024px:w-1/3 pt-8 1024px:pl-8 bg-gradient-to-r from-black-1 to-white">
        <h3 className="text-3xl text-navy -mb-2">Upcoming Events</h3>
        <div className="mb-4 text-lg 1024px:mb-8  text-navy opacity-50">
          {upcomingDateString}
        </div>
        <UpcomingEvents start={start} end={future} />
      </div>
      </div>
     
    </Layout>
    </>
  )
}
export default Index
