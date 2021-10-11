import React from "react"
import Feed from "./Feed"
import AppearancesData from "../data/appearances.json"
import MeetingsData from "../data/meetings.json"


const Feeds = ({start, end}) => {

  return (
  <>
    <div>

      <Feed title="Meetings" startDate={start} endDate={end} nodes={MeetingsData} link="/meetings" singleColumn="true" />
      <Feed title="Appearances" startDate={start} endDate={end} nodes={AppearancesData} link="/Appearances" singleColumn="true"/>

    </div>
    </>
  )
}
export default Feeds
