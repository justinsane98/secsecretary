import React from "react"
import Feed from "./Feed"
import OtherOrdersNoticesData from "../data/otherOrdersNotices.json"

const Feeds = ({start, end}) => {

return (
  <>
    <div>
      <Feed title="Other Orders and Notices" startDate={start} endDate={end} nodes={OtherOrdersNoticesData} link="/otherOrdersNotices" />
    </div>
    </>
  )
}
export default Feeds
