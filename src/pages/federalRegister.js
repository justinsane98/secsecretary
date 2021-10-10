import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Feed from "../components/Feed"
import Layout from "../components/Layout"

const FederalRegister = () => {
var today = new Date();
var start = new Date(today);
start.setDate(start.getDate()-99999);
var end = new Date(today);
end.setDate(end.getDate());

const data = useStaticQuery(graphql`
{
  allFeedFederalRegister {
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
const nodes = data.allFeedFederalRegister.nodes;

return (
    <>
    <Layout>
      <section className="mb-12 relative">
        <Feed title="Federal Register" startDate={start} endDate={end} nodes={nodes} link="/federalRegister" />
        <div className="relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2">
          <a className="text-gold leading-loose hover:underline" href="https://www.federalregister.gov/api/v1/documents.rss?&conditions%5Bagency_ids%5D%5B%5D=466&order=newest">XML</a> | <a className="inline-block text-navy hover:underline" href="https://www.federalregister.gov/agencies/securities-and-exchange-commission">Source</a>
        </div>
        </section>    
      </Layout>
    </>
  )
}
export default FederalRegister