import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Feed from "../components/Feed"
import Layout from "../components/Layout"

const Speeches = () => {
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate()-99999);
var end = new Date(today);
end.setDate(end.getDate());

const data = useStaticQuery(graphql`
{
  allFeedSpeeches{
    nodes {
      content
      guid
      pubDate
      title
      link
    }
  }
}
`)
const nodes = data.allFeedSpeeches.nodes;

return (
  <>
    <Layout>
        <section className="my-12 relative">
          <Feed title="Speeches" startDate={start} endDate={end} nodes={nodes} link="/speeches" />
          <div className="relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2">
            <a className="text-gold leading-loose hover:underline" href="https://www.sec.gov/news/speeches.rss">XML</a> | <a className="inline-block text-navy hover:underline" href="https://www.sec.gov/news/speeches">Source</a>
          </div>    
        </section>
    </Layout>
    </>
  )
}
export default Speeches