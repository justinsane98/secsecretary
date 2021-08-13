const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  pathPrefix: "/gatsby_justinshearer_com",
  siteMetadata: {
    title: "Justin Shearer dot com",
    author: "Justin Shearer",
    description: "Justin Shearer dot com",
  },
  plugins: [
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
    "gatsby-plugin-transition-link"
  ],
  
}
