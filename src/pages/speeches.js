import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Feed from "../components/Feed"
import Footer from "../components/Footer"
import Header from "../components/Header"

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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display&display=swap"
      rel="stylesheet"
    />

    <Header/>
    <div className="my-12 mx-auto max-w-2xl w-3/4 font-serif">
      <main>
        <section className="mb-12 relative">
          <Feed title="Speeches" startDate={start} endDate={end} nodes={nodes} link="/speeches" />
          <div className="relative -top-10 -mt-8 425px:mt-0 425px:absolute 425px:top-2 425px:right-0 bg-white 425px:text-right 425px:w-1/2">
            <a className="text-gold leading-loose hover:underline" href="https://www.sec.gov/news/speeches.rss">XML</a> | <a className="inline-block text-navy hover:underline" href="https://www.sec.gov/news/speeches">Source</a>
          </div>    
        </section>
      </main>
      <Footer />
    </div>
    </>
  )
}
export default Speeches