import React from "react"
import Feeds from "../components/Feeds"
import Layout from "../components/Layout"

const Yesterday = () => {
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var MOD = 1;
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate() - MOD);
var startDate = months[start.getMonth()] + " " + (start.getDate()) + ", " + start.getFullYear();
var end = new Date(today);
end.setDate(end.getDate() - MOD);
var endDate = months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear();

return (
  <>
    <Layout>
      <h1 className="text-3xl text-navy 1024px:mb-8">Yesterday at the SEC</h1>
      <h2 className="mb-4 text-lg 1024px:absolute top-3 right-0">
      <a className="text-navy-50 inline-block relative top-1 left-0" href="/week">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <span className="px-2">{startDate === endDate ? startDate : (startDate + " - " + endDate)}</span>
        <a className="text-navy-50 inline-block relative top-1 left-0" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </h2>
      <Feeds start={start} end={end} />
    </Layout>
    </>
  )
}
export default Yesterday
