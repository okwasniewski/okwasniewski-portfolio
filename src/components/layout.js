/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 1200,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      >
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
