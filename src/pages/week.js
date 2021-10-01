import React from "react"
import Feeds from "../components/sec/Feeds"
import Footer from "../components/sec/Footer"
import Header from "../components/sec/Header"

const Week = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var MOD = 7;
var message = "was published the past week."
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate() - MOD);
var startDate = months[start.getMonth()] + " " + (start.getDate()) + ", " + start.getFullYear();
var end = new Date(today);
end.setDate(end.getDate());
var endDate = months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear();

return (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
      rel="stylesheet"
    />

    <Header/>
    <div className="my-12 mx-auto max-w-2xl w-3/4 font-serif">
    <main>
      <h1 className="text-3xl text-navy text-center">The past week at the SEC</h1>
      <h2 className="mb-8 text-lg text-center">
        {startDate === endDate ? startDate : (startDate + " - " + endDate)}
        <a className="text-navy-50 inline-block relative top-1 left-2" href="/yesterday">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </h2>

      <Feeds start={start} end={end} message={message}/>

      </main>
      <Footer />
      </div>
    </>
  )
}
export default Week
