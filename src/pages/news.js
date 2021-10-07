import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Feed from "../components/Feed"
import Layout from "../components/Layout"

const News = () => {
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate()-99999);
var end = new Date(today);
end.setDate(end.getDate());

const data = useStaticQuery(graphql`
{
  allFeedNews {
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
const nodes = data.allFeedNews.nodes;

return (
    <>
    <Layout>
      <section className="mb-12 relative">
        <Feed title="News" startDate={start} endDate={end} nodes={nodes} link="/news" />
        <div className="relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2">
          <a className="text-gold leading-loose hover:underline" href="https://www.sec.gov/rss/news/press.xml">XML</a> | <a className="inline-block text-navy hover:underline" href="https://www.sec.gov/news/pressreleases">Source</a>
        </div>
        </section>    
      </Layout>
    </>
  )
}
export default News