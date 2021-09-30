const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Justin Shearer | Designer. Developer. Dad.",
    author: "Justin Shearer",
    description: "I am a creative UI/UX designer, seasoned full-stack web-developer and a data driven generalist who is always looking for an interesting problem to solve. I've worked with agile startups like Square, established consumer brands like Scotty Cameron and large government entities like the State of California.",
  },
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.sec.gov/rss/news/press.xml`,
        name: `News`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.sec.gov/rss/litigation/litreleases.xml`,
        name: `Litigation`,
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Justin Shearer dot com",
        short_name: "justinshearer.com",
        start_url: "/",
        background_color: "#fff",
        theme_color: "white",
        icon: "static/icon.svg",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-transition-link",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-3K14SCY8N8",
          ],
       gtagConfig: {
        },
        pluginConfig: {
          head: false,
          exclude: [],
        },
      },
    },
  ],
  
}
