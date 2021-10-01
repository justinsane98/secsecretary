import React from "react"
import notFoundImage from "../images/not-found-image.svg"

export default () => {
  return (
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <img className="p-4" src={notFoundImage} alt="Page not found" />
      </main>
  )
}
