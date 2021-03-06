import React from "react"
import Feed from "../components/Feed"
import Layout from "../components/Layout"
import MeetingData from "../data/meetings.json"

const Meetings = () => {
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate()-99999);
var end = new Date(today);
end.setDate(end.getDate()+99999);

return (
    <>
    <Layout>
      <section className="my-12 relative">
        <Feed title="Meetings" startDate={start} endDate={end} nodes={MeetingData} link="/meetings" />
        <div className="relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2">
          <a className="inline-block text-navy hover:underline" href="https://www.sec.gov/news/upcoming-events">Source</a>
        </div>
        </section>    
      </Layout>
    </>
  )
}
export default Meetings