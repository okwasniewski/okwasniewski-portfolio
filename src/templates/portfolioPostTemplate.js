import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const portfolioPostTemplate = data => {
  const pageData = data.pageContext.data
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <Layout>
      <div className="portfolioTemplate">
        <div className="portfolioTemplate__header">
          <h1>{pageData.name}</h1>
          <p>{pageData.description}</p>
        </div>
        <div className="portfolioTemplate__main">
          <div className="portfolioTemplate__image">
            <img src={pageData.image.url}></img>
          </div>
        </div>
        <div className="portfolioTemplate__buttonContainer">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="button"
            href={pageData.url}
          >
            Zobacz stronę
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default portfolioPostTemplate
