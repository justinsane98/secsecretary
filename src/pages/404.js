import React from "react"
import notFoundImage from "../images/not-found-image.svg"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <div className="max-w-4xl min-h-screen justify-around">
        <img className="p-4" src={notFoundImage} alt="Page not found" />
      </div>
    </Layout>
  )
}
