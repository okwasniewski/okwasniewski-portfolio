import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Main from "../components/main"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Testimonial from "../components/Testimonials"

const IndexPage = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Testimonial />
    </Layout>
  )
}

export default IndexPage
