import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Main from "../components/main"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Testimonial from "../components/Testimonials"
import AOS from "aos"
import "aos/dist/aos.css"

const IndexPage = () => {
  useEffect(() => {
    AOS.init()
  })
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div data-aos="fade-right">
        <Main />
      </div>
      <div data-aos="fade-left">
        <AboutMe />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-up" data-aos-delay="50">
        <Portfolio />
      </div>
      <div data-aos="fade-left">
        <Testimonial />
      </div>
    </Layout>
  )
}

export default IndexPage
