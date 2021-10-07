import React from "react"
import Feeds from "../components/Feeds"
import Layout from "../components/Layout"

const Index = () => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var MOD = 0;
  var today = new Date();
  var start = new Date(today);
  start.setDate(start.getDate() - MOD);
  var startDate = months[start.getMonth()] + " " + (start.getDate()) + ", " + start.getFullYear();
  var end = new Date(today);
  end.setDate(end.getDate());
  var endDate = months[end.getMonth()] + " " + end.getDate() + ", " + end.getFullYear();

  return (
  <>
    <Layout>
      <h1 className="text-3xl text-navy 1024px:mb-8">Today at the SEC</h1>
      <h2 className="mb-4 text-lg 1024px:absolute top-3 right-0">
        <a className="text-navy-50 inline-block relative top-1 left-0" href="/yesterday">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <span className="ml-2">{startDate === endDate ? startDate : (startDate + " - " + endDate)}</span>
      </h2>
      <blockquote className="mb-8 text-sm px-6 py-4 border border-black-25 bg-black-10 opacity-75">The official What’s New page for the SEC is no longer updated as of September 30, 2021. To stay current on the most recent materials posted to the SEC website, the SEC suggests subscribing to the <a className="text-navy font-bold hover:underline" href="https://www.sec.gov/about/secrss.shtml">SEC RSS feeds</a>. <span className="font-bold">Or you can let the Secretary take of that for you.</span></blockquote>
      <Feeds start={start} end={end} />
    </Layout>
    </>
  )
}
export default Index
