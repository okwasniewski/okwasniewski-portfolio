import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
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
      <SEO
        title="Portfolio / Front-end Developer "
        description="Cześć! Nazywam się Oskar Kwaśniewski i zajmuje się tworzeniem, wprowadzaniem zmian oraz aktualizacją stron dla małych firm i przedsiębiorców. Mam doświadczenie w pracy z klientami i potrafię z nimi rozmawiać. "
      />
      <Main />
      <div data-aos="fade-left">
        <AboutMe />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-up" data-aos-delay="50">
        <Portfolio />
      </div>
    </Layout>
  )
}

export default IndexPage
